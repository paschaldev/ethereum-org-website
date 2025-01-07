---
title: Cum să vă vizualizați NFT-ul în portofel (Partea 3/3 din seria de tutoriale NFT)
description: Tutorialul acesta descrie cum se poate vizualiza un NFT existent pe MetaMask!
author: "Sumi Mudgil"
tags:
  - "NFT-uri"
  - "ERC-721"
  - "Alchemy"
  - "tokenuri nefungibile"
  - "Solidity"
skill: beginner
lang: ro
published: 2021-04-22
---

Acest tutorial este Partea 3 din seria de trei părți a tutorialului despre NFT-uri în care vom vizualiza NFT-ul nostru proaspăt emis. Totodată, puteți utiliza tutorialul general pentru orice token ERC-721 folosind MetaMask, inclusiv pe Mainnet sau pe orice testnet. Dacă doriți să învățați cum să vă emiteţi propriul NFT pe Ethereum, ar trebui să consultați [Partea 1 despre Cum să scrieți & să implementați un contract inteligent NFT](/developers/tutorials/how-to-write-and-deploy-an-nft)!

Felicitări! Ați ajuns la cea mai scurtă și mai simplă parte a seriei noastre de tutoriale despre NFT -uri — cum să vizualizați NFT-ul proaspăt emis într-un portofel virtual. Vom folosi de asemenea MetaMask pentru acest exemplu, deoarece l-am folosit în cele două părți anterioare.

Ca şi condiţie prealabilă, ar trebui să aveți deja instalat MetaMask pe mobil, care să includă și contul în care v-ați emis NFT-ul — puteți obține aplicația gratuit pe [iOS](https://apps.apple.com/us/app/metamask-blockchain-wallet/id1438144202) sau [Android](https://play.google.com/store/apps/details?id=io.metamask&hl=en_US&gl=US).

## Etapa 1: Configurați rețeaua pe Ropsten {#set-network-to-ropsten}

În partea superioară a aplicației, apăsați butonul „Wallet” („Portofel”), după care vi se va cere să selectați o rețea. Deoarece NFT-ul nostru a fost emis în rețeaua Ropsten, va trebui să selectați Ropsten ca rețea.

![Cum să setați Ropsten ca rețeaua dvs. pe MetaMask Mobile](./goerliMetamask.gif)

## Etapa 2: Adăugarea obiectului de colecție la MetaMask {#add-nft-to-metamask}

Odată ce vă aflați în rețeaua Ropsten, selectați fila „Collectibles” („Obiecte de colecție”) din dreapta și adăugați adresa contractului inteligent NFT și ID-ul jetonului ERC-721 al NFT-ului dvs. — pe care ar trebui să le găsiți pe Etherscan pe baza hash-ului tranzacției din NFT-ul dvs. implementat în Partea 2 a tutorialului nostru.

![Cum să găsiţi hash-ul tranzacției și ID-ul tokenului ERC-721](./findNFTEtherscan.png)

Ar putea fi necesar să reîncărcaţi de câteva ori pentru a vă vedea NFT-ul — dar va fi acolo <Emoji text="😄" size={1} />!

![Cum să vă încărcați NFT-ul pe MetaMask](./findNFTMetamask.gif)

Felicitări! Ați emis cu succes un NFT și acum îl puteți vizualiza! Așteptăm cu nerăbdare să vedem cum luaţi cu asalt lumea NFT-urilor!
