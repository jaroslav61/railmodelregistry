# RailModelRegistry

Aplikácia na evidenciu modelov železníc s Firebase (Auth, Firestore, Storage).

## Funkcie
- Evidencia lokomotív, vagónov a príslušenstva
- Limit 5 modelov bez predplatného, viac cez predplatné
- Užívateľské profily; číselníky (verejné + admin zápis)

## Technológie
- React (bolt.new štýl)
- Firebase (Auth, Firestore, Storage)
- Tailwind CSS

## Lokálne spustenie
- otvoriť `index.html` alebo
- `npx http-server . -p 3000`

## Nasadenie
- upload na Apache cez FTP (statické súbory)
- Firebase config je verejný identifikátor; bezpečnosť riešia Firestore rules

## Firestore rules
Pozri `firestore.rules`.

