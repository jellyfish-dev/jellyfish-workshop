# Przygotowanie plików

Pliki które czyta jellyfish muszą znajdować się w katalogu o nazwie `file_component_sources`
U mnie jest o `/Users/kamilstasiak/Desktop/example_files/file_component_sources`

Plik ten musi być encodowany następująco:

> The video must be encoded in raw H264 at 30 frames per second. 
> You can convert the video using the following ffmpeg command: 
> ffmpeg -i input_video -filter:v fps=30 -vcodec libx264 output.h264 

# Uruchom Jellyfish Media Server

Znajdź swoje IP

```shell
ifconfig | grep 'inet ' | grep -Fv 127.0.0.1 | awk '{print $2}'
```

Potrzebujesz wskazać jellyfishowi ścieżkę do plików, 
jest to ścieżka do rodzica wyżej wspomnianego katalogu `file_component_sources`

U mnie ten katalog znajduje się w: `/Users/kamilstasiak/Desktop/example_files/`

## Uruchomienie jellyfisha

Ścieżkę do katalogu z plikami podaj w `JF_RESOURCES_BASE_PATH`

```shell
JF_WEBRTC_TURN_IP=${myip} JF_HOST=localhost:5002 JF_WEBRTC_TURN_LISTEN_IP=0.0.0.0 JF_RESOURCES_BASE_PATH=/Users/kamilstasiak/Desktop/example_files mix phx.server
```

# Odpal dashboard

[https://jellyfish-dev.github.io/jellyfish-dashboard/](https://jellyfish-dev.github.io/jellyfish-dashboard/)

# Łączenie się do jellyfisha i tworzenie pokoju

W jellyfish dashboard wybierz: 
- Wybierz niebieski przycisk `Connect to server!` / Albo hambuerger menu w lewym górnym rogu
- Wybierz zielony przycisk `Connect to server`
- Wybierz Zielony `+` który w tooltipie podpowiada `Create room`

# Podłączenie użytkownika żeby sprawdzić czy video się przesyła
Żeby odbierać video trzebe utworzyć Peera (na dashbordzie opisane jako Client). 
Na początku utwórzmy jednego peera i połączmy się nim z dashboardu żeby sprawdzić czy jellyfish poprawnie wysyła video.

- Wybierz `Create peer`
- Następnie w nowoutworzonym obiekcie wybierz `Connect`

Peer te na początku nie odbiera żadnych tracków, 
ale jak tylko jellyfish zacznie coś wysyłać to pojawi się nowa sekcja Remote tracks.

Skopiuj token widoczny poniżej napisu `Client`. 

# Rozpoczęcie streamowanie video z pliku
- Wybierz biały przycisk `Show components`
- Uzupełnij input `File path`. Jest to relatywna ścieżka względem tej podanej przy uruchamianiu Jellyfisha
- Po kliknięciu zielony przycisk `Add file` streamowanie video się rozpocznie. 
Po prawej stronie pojawi się nowy `File component`.

Jellyfish streamuje video aż dojdzie do końca pliku. 
Żeby ponownie puścić video trzeba usunąć file component i dodać go ponownie

Jeżeli wszystko działa to możesz wybrać `Disconnect` i reużyć tego peera w swoim kodzie, 
albo możesz utworzyć nowego i tutaj na dashbordzie sprawdzać, czy jakieś multimedia płyną.
Pamiętaj, że peera można połączyć tylko raz i jak będzie połączony z dashboardu to nie uda się nim połączyć z kodu.

# Kod

Do połączenia potrzebny jest tylko skopiowny wcześniej Peer token.

Jedyna istotna zależność do zainstalowanie to `@jellyfish-dev/ts-client-sdk`

Kod obsługujący GUI znajduje się w pliku `src/main.ts`.

Minimalny kod służący do automatycznego połączenia się z Jellyfishem znajduje się w pliku `src/noGui.ts`.

W pliku `index.html` wybierz, z którego chcesz korzystać. 


