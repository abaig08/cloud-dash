#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClient.h>

WiFiClient wifiClient;

const char* ssid = "Saam S23";
const char* password = "Saam1234";

const char* serverName = "http://192.168.185.71/sensorserver/post-esp-data.php";

String apiKeyValue = "tPmAT5Ab3j7F9";


//flow sensor variables start
int sensor_m1 = D2;
int sensor_m2 = D3;

volatile long pulse_m1;
unsigned long lastTime_m1;
float volume_m1;

volatile long pulse_m2;
unsigned long lastTime_m2;
float volume_m2;
//flow sensor variables end

float diff=0;
bool valve_status;

//valve variables starts
int valve = D1;
//valve variables ends

void setup() {
  pinMode(sensor_m1, INPUT);
  pinMode(sensor_m2, INPUT);
  pinMode(valve, OUTPUT);

  valve_status = true;
  digitalWrite(valve, LOW);

  Serial.begin(115200);

  // WiFi.begin(ssid, password);
  // Serial.println("Connecting");
  // while (WiFi.status() != WL_CONNECTED) {
  //   delay(500);
  //   Serial.print(".");
  // }
  // Serial.println("");
  // Serial.print("Connected to WiFi network with IP Address: ");
  // Serial.println(WiFi.localIP());

  attachInterrupt(digitalPinToInterrupt(sensor_m1), increase_m1, RISING);
  attachInterrupt(digitalPinToInterrupt(sensor_m2), increase_m2, RISING);
}
void loop() {

  //flow sensor start
  volume_m1 = 2.663 * pulse_m1 / 1000 * 30;
  if (millis() - lastTime_m1 > 2000) {
    pulse_m1 = 0;
    lastTime_m1 = millis();
  }
  Serial.print("M1: ");
  Serial.print(volume_m1);
  Serial.print(" L/m");

  volume_m2 = 2.663 * pulse_m2 / 1000 * 30;
  if (millis() - lastTime_m2 > 2000) {
    pulse_m2 = 0;
    lastTime_m2 = millis();
  }

 diff = volume_m1 - volume_m2;

if (diff > 4) {
    digitalWrite(valve, HIGH);
    valve_status = false;
  }

  Serial.print("              ");
  Serial.print("M2: ");
  Serial.print(volume_m2);
  Serial.print(" L/m");

  Serial.print("              ");
  Serial.print("Diff: ");
  Serial.print(diff);
  Serial.print(" L/m");

  Serial.print("              ");
  Serial.print("Status: ");
  Serial.print(valve_status);
  Serial.println(" ");
  //flow sensor end




  //diff starts
 
  //diff ends

  //valve logics start
  
  //valve logics end

  // if (WiFi.status() == WL_CONNECTED) {
  //   HTTPClient http;
  //   http.begin(wifiClient,serverName);
  //   http.addHeader("Content-Type", "application/x-www-form-urlencoded");
  //   String httpRequestData = "api_key=" + apiKeyValue + "&flow_m1=" + String(volume_m1)
  //                            + "&flow_m2=" + String(volume_m2) + "&diff=" + String(diff) + "&valve_status=" + String(valve_status) + "";  //valve_status
  //   Serial.print("httpRequestData: ");
  //   Serial.println(httpRequestData);
  //   int httpResponseCode = http.POST(httpRequestData);

  //   if (httpResponseCode > 0) {
  //     Serial.print("HTTP Response code: ");
  //     Serial.println(httpResponseCode);
  //   } else {
  //     Serial.print("Error code: ");
  //     Serial.println(httpResponseCode);
  //   }
  //   http.end();
  // } else {
  //   Serial.println("WiFi Disconnected");
  // }
  delay(1000);
}

//flow sensor functions start
ICACHE_RAM_ATTR void increase_m1() {
  pulse_m1++;
}

ICACHE_RAM_ATTR void increase_m2() {
  pulse_m2++;
}
//flow sensor functions end
