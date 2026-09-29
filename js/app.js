// ==========================================================
// GİZLİ DOSYA — ANA JAVASCRIPT
// BÖLÜM 01 + BÖLÜM 02 + BÖLÜM 03 + BÖLÜM 04
// ==========================================================


// ==========================================================
// YARDIMCI
// ==========================================================

function eleman(id) {
    return document.getElementById(id);
}

function gizle(element) {
    if (element) {
        element.classList.add("gizli");
    }
}

function goster(element) {
    if (element) {
        element.classList.remove("gizli");
    }
}


// ==========================================================
// EKRANLAR
// ==========================================================

const anaEkran = eleman("anaEkran");
const brifingEkrani = eleman("brifingEkrani");
const hafizaEkrani = eleman("hafizaEkrani");
const soruEkrani = eleman("soruEkrani");
const gizliKayitEkrani = eleman("gizliKayitEkrani");
const liseKaydiEkrani = eleman("liseKaydiEkrani");
const universiteKaydiEkrani = eleman("universiteKaydiEkrani");
const ilkBulusmaKaydi = eleman("ilkBulusmaKaydi");

const sistemMesaji =
    document.querySelector(".sistem-mesaji");


// ==========================================================
// BÖLÜM 02
// ==========================================================

const terminalBaslangicEkrani =
    eleman("terminalBaslangicEkrani");

const terminalKayit1Ekrani =
    eleman("terminalKayit1Ekrani");

const terminalKayit2Ekrani =
    eleman("terminalKayit2Ekrani");

const terminalSifreEkrani =
    eleman("terminalSifreEkrani");

const terminalMesajEkrani =
    eleman("terminalMesajEkrani");


// ==========================================================
// BÖLÜM 03
// ==========================================================

const albumBolumu = eleman("albumBolumu");
const albumKapakEkrani = eleman("albumKapakEkrani");
const albumSahnesi = eleman("albumSahnesi");
const albumKasaEkrani = eleman("albumKasaEkrani");
const albumBolum4Gecis = eleman("albumBolum4Gecis");

const albumGizliNot = eleman("albumGizliNot");


// ==========================================================
// BÖLÜM 01 — ANA EKRAN
// ==========================================================

const baslaButonu = eleman("baslaButonu");

if (baslaButonu) {

    baslaButonu.addEventListener("click", () => {

        baslaButonu.disabled = true;

        if (sistemMesaji) {
            sistemMesaji.textContent =
                "SİSTEM BAŞLATILIYOR...";
        }

        setTimeout(() => {

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KULLANICI DOĞRULANIYOR...";
            }

        }, 800);

        setTimeout(() => {

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "ERİŞİM KONTROL EDİLİYOR...";
            }

        }, 1600);

        setTimeout(() => {

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "ERİŞİM SAĞLANDI.";
            }

            gizle(anaEkran);
            goster(brifingEkrani);

        }, 2400);

    });
}


// ==========================================================
// BRİFİNG → HAFIZA
// ==========================================================

const brifingButonu =
    eleman("brifingButonu");

if (brifingButonu) {

    brifingButonu.addEventListener("click", () => {

        gizle(brifingEkrani);
        goster(hafizaEkrani);

        if (sistemMesaji) {
            sistemMesaji.textContent =
                "GÖREV 01 YÜKLENİYOR...";
        }

    });

}


// ==========================================================
// HAFIZA → #001
// ==========================================================

const hafizaBaslatButonu =
    eleman("hafizaBaslatButonu");

if (hafizaBaslatButonu) {

    hafizaBaslatButonu.addEventListener("click", () => {

        gizle(hafizaEkrani);
        goster(soruEkrani);

        if (sistemMesaji) {
            sistemMesaji.textContent =
                "HAFIZA KAYDI #001 AÇILDI.";
        }

    });

}


// ==========================================================
// #001
// ==========================================================

const cevapButonlari =
    soruEkrani
        ? soruEkrani.querySelectorAll(".cevap-butonu")
        : [];

const cevapSonucu = eleman("cevapSonucu");
const sonucBaslik = eleman("sonucBaslik");
const sonucMesaji = eleman("sonucMesaji");

cevapButonlari.forEach((buton) => {

    buton.addEventListener("click", () => {

        const verilenCevap =
            buton.dataset.cevap;

        cevapButonlari.forEach((cevap) => {
            cevap.classList.remove("dogru");
            cevap.classList.remove("yanlis");
        });

        if (verilenCevap === "B") {

            buton.classList.add("dogru");

            goster(cevapSonucu);

            if (sonucBaslik) {
                sonucBaslik.textContent =
                    "✓ KAYIT DOĞRULANDI";
            }

            if (sonucMesaji) {
                sonucMesaji.textContent =
                    "İlk gerçek iletişim kaydı başarıyla eşleştirildi. Sistem yeni verileri inceliyor...";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANDI.";
            }

            cevapButonlari.forEach((cevap) => {
                cevap.disabled = true;
            });

            setTimeout(() => {

                gizle(soruEkrani);
                gizle(cevapSonucu);
                goster(gizliKayitEkrani);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "BEKLENMEYEN KAYIT TESPİT EDİLDİ.";
                }

            }, 1800);

        } else {

            buton.classList.add("yanlis");

            goster(cevapSonucu);

            if (sonucBaslik) {
                sonucBaslik.textContent =
                    "⚠ KAYIT DOĞRULANAMADI";
            }

            if (sonucMesaji) {
                sonucMesaji.textContent =
                    "Sistem seçilen kaydı mevcut verilerle eşleştiremedi. Kayıtları yeniden değerlendir.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANAMADI.";
            }

        }

    });

});


// ==========================================================
// #002
// ==========================================================

const kaydiInceleButonu =
    eleman("kaydiInceleButonu");

const notIcerigi =
    eleman("notIcerigi");

const notUyarisi =
    eleman("notUyarisi");

const sonrakiKayitButonu =
    eleman("sonrakiKayitButonu");

if (kaydiInceleButonu) {

    kaydiInceleButonu.addEventListener("click", () => {

        kaydiInceleButonu.disabled = true;
        kaydiInceleButonu.classList.add("gizli");

        if (sistemMesaji) {
            sistemMesaji.textContent =
                "KAYIT İÇERİĞİ ÇÖZÜMLENİYOR...";
        }

        setTimeout(() => {

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT İÇERİĞİ ÇÖZÜMLENDİ.";
            }

            goster(notIcerigi);

            if (notUyarisi) {
                notUyarisi.textContent =
                    "⚠ KAYIT İÇERİĞİ ÇÖZÜMLENDİ.";
            }

        }, 1000);

        setTimeout(() => {

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "HAFIZA KAYDI #002 TAMAMLANDI.";
            }

            goster(sonrakiKayitButonu);

        }, 1800);

    });

}

if (sonrakiKayitButonu) {

    sonrakiKayitButonu.addEventListener("click", () => {

        gizle(gizliKayitEkrani);
        goster(liseKaydiEkrani);

        if (sistemMesaji) {
            sistemMesaji.textContent =
                "HAFIZA KAYDI #003 AÇILDI.";
        }

    });

}


// ==========================================================
// #003
// ==========================================================

const liseCevapButonlari =
    liseKaydiEkrani
        ? liseKaydiEkrani.querySelectorAll(".cevap-butonu")
        : [];

const liseCevapSonucu =
    eleman("liseCevapSonucu");

const liseSonucBaslik =
    eleman("liseSonucBaslik");

const liseSonucMesaji =
    eleman("liseSonucMesaji");

liseCevapButonlari.forEach((buton) => {

    buton.addEventListener("click", () => {

        const cevap =
            buton.dataset.liseCevap;

        liseCevapButonlari.forEach((item) => {
            item.classList.remove("dogru");
            item.classList.remove("yanlis");
        });

        if (cevap === "C") {

            buton.classList.add("dogru");

            goster(liseCevapSonucu);

            if (liseSonucBaslik) {
                liseSonucBaslik.textContent =
                    "✓ KAYIT DOĞRULANDI";
            }

            if (liseSonucMesaji) {
                liseSonucMesaji.textContent =
                    "İletişimin kesilmesine neden olan karar başarıyla eşleştirildi.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANDI.";
            }

            liseCevapButonlari.forEach((item) => {
                item.disabled = true;
            });

            setTimeout(() => {

                gizle(liseKaydiEkrani);
                gizle(liseCevapSonucu);
                goster(universiteKaydiEkrani);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "HAFIZA KAYDI #004 AÇILDI.";
                }

            }, 1800);

        } else {

            buton.classList.add("yanlis");

            goster(liseCevapSonucu);

            if (liseSonucBaslik) {
                liseSonucBaslik.textContent =
                    "⚠ KAYIT DOĞRULANAMADI";
            }

            if (liseSonucMesaji) {
                liseSonucMesaji.textContent =
                    "Sistem seçilen kaydı mevcut verilerle eşleştiremedi. Kayıtları yeniden değerlendir.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANAMADI.";
            }

        }

    });

});


// ==========================================================
// #004
// ==========================================================

const universiteCevapButonlari =
    universiteKaydiEkrani
        ? universiteKaydiEkrani.querySelectorAll(".cevap-butonu")
        : [];

const universiteCevapSonucu =
    eleman("universiteCevapSonucu");

const universiteSonucBaslik =
    eleman("universiteSonucBaslik");

const universiteSonucMesaji =
    eleman("universiteSonucMesaji");

universiteCevapButonlari.forEach((buton) => {

    buton.addEventListener("click", () => {

        const cevap =
            buton.dataset.universiteCevap;

        universiteCevapButonlari.forEach((item) => {
            item.classList.remove("dogru");
            item.classList.remove("yanlis");
        });

        if (cevap === "A") {

            buton.classList.add("dogru");

            goster(universiteCevapSonucu);

            if (universiteSonucBaslik) {
                universiteSonucBaslik.textContent =
                    "✓ KAYIT DOĞRULANDI";
            }

            if (universiteSonucMesaji) {
                universiteSonucMesaji.textContent =
                    "Sistem kaydı doğruladı. Gece gönderilen ilk mesaj sana ait.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANDI.";
            }

            universiteCevapButonlari.forEach((item) => {
                item.disabled = true;
            });

            setTimeout(() => {

                gizle(universiteKaydiEkrani);
                gizle(universiteCevapSonucu);
                goster(ilkBulusmaKaydi);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "HAFIZA KAYDI #005 AÇILDI.";
                }

            }, 1800);

        } else {

            buton.classList.add("yanlis");

            goster(universiteCevapSonucu);

            if (universiteSonucBaslik) {
                universiteSonucBaslik.textContent =
                    "⚠ KAYIT DOĞRULANAMADI";
            }

            if (universiteSonucMesaji) {
                universiteSonucMesaji.textContent =
                    "Sistem seçilen kaydı mevcut verilerle eşleştiremedi. Kayıtları yeniden değerlendir.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANAMADI.";
            }

        }

    });

});


// ==========================================================
// #005
// ==========================================================

const ilkBulusmaCevapButonlari =
    ilkBulusmaKaydi
        ? ilkBulusmaKaydi.querySelectorAll(".cevap-butonu")
        : [];

const ilkBulusmaCevapSonucu =
    eleman("ilkBulusmaCevapSonucu");

const ilkBulusmaSonucBaslik =
    eleman("ilkBulusmaSonucBaslik");

const ilkBulusmaSonucMesaji =
    eleman("ilkBulusmaSonucMesaji");

ilkBulusmaCevapButonlari.forEach((buton) => {

    buton.addEventListener("click", () => {

        const cevap =
            buton.dataset.ilkBulusmaCevap;

        ilkBulusmaCevapButonlari.forEach((item) => {
            item.classList.remove("dogru");
            item.classList.remove("yanlis");
        });

        if (cevap === "B") {

            buton.classList.add("dogru");

            goster(ilkBulusmaCevapSonucu);

            if (ilkBulusmaSonucBaslik) {
                ilkBulusmaSonucBaslik.textContent =
                    "✓ KAYIT DOĞRULANDI";
            }

            if (ilkBulusmaSonucMesaji) {
                ilkBulusmaSonucMesaji.textContent =
                    "İlk buluşmanın başlangıç noktası doğrulandı. Ortaokul bahçesine ait kayıt başarıyla eşleştirildi.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANDI.";
            }

            ilkBulusmaCevapButonlari.forEach((item) => {
                item.disabled = true;
            });

            setTimeout(() => {

                gizle(ilkBulusmaKaydi);
                goster(terminalBaslangicEkrani);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "ŞİFRELEME PROTOKOLÜ BAŞLATILIYOR...";
                }

            }, 1800);

        } else {

            buton.classList.add("yanlis");

            goster(ilkBulusmaCevapSonucu);

            if (ilkBulusmaSonucBaslik) {
                ilkBulusmaSonucBaslik.textContent =
                    "⚠ KAYIT DOĞRULANAMADI";
            }

            if (ilkBulusmaSonucMesaji) {
                ilkBulusmaSonucMesaji.textContent =
                    "Sistem seçilen konum kaydını mevcut verilerle eşleştiremedi. Buluşmanın başlangıç noktasını yeniden düşün.";
            }

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT DOĞRULANAMADI.";
            }

        }

    });

});


// ==========================================================
// TERMİNAL
// ==========================================================

const terminalBaslatButonu =
    eleman("terminalBaslatButonu");

if (terminalBaslatButonu) {

    terminalBaslatButonu.addEventListener("click", () => {

        terminalBaslatButonu.disabled = true;

        if (sistemMesaji) {
            sistemMesaji.textContent =
                "GÜVENLİ BAĞLANTI KURULUYOR...";
        }

        setTimeout(() => {

            gizle(terminalBaslangicEkrani);
            goster(terminalKayit1Ekrani);

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KORUMALI KAYIT #01 AÇILDI.";
            }

        }, 1200);

    });

}


// ==========================================================
// TERMİNAL KAYIT #01
// ==========================================================

const terminalHitap1 =
    eleman("terminalHitap1");

const terminalHitap1Butonu =
    eleman("terminalHitap1Butonu");

const terminalHitap1Sonucu =
    eleman("terminalHitap1Sonucu");

function terminalTemizle(metin) {

    return String(metin || "")
        .toLocaleLowerCase("tr-TR")
        .trim()
        .replace(/\s+/g, " ");

}

if (terminalHitap1Butonu) {

    terminalHitap1Butonu.addEventListener("click", () => {

        const cevap =
            terminalTemizle(
                terminalHitap1
                    ? terminalHitap1.value
                    : ""
            );

        if (cevap === "aptal balık") {

            goster(terminalHitap1Sonucu);

            terminalHitap1Sonucu.textContent =
                "> VERİ DOĞRULANDI ✓\n" +
                "> KAYIT #01 EŞLEŞTİ.";

            terminalHitap1Sonucu.classList.add(
                "terminal-dogru"
            );

            if (terminalHitap1) {
                terminalHitap1.disabled = true;
            }

            terminalHitap1Butonu.disabled = true;

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT #01 DOĞRULANDI.";
            }

            setTimeout(() => {

                gizle(terminalKayit1Ekrani);
                goster(terminalKayit2Ekrani);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "KORUMALI KAYIT #02 AÇILDI.";
                }

            }, 1500);

        } else {

            goster(terminalHitap1Sonucu);

            terminalHitap1Sonucu.textContent =
                "> VERİ EŞLEŞMEDİ.\n" +
                "> İPUCUNU YENİDEN DEĞERLENDİR.";

            terminalHitap1Sonucu.classList.remove(
                "terminal-dogru"
            );

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT #01 DOĞRULANAMADI.";
            }

        }

    });

}


// ==========================================================
// TERMİNAL KAYIT #02
// ==========================================================

const terminalHitap2 =
    eleman("terminalHitap2");

const terminalHitap2Butonu =
    eleman("terminalHitap2Butonu");

const terminalHitap2Sonucu =
    eleman("terminalHitap2Sonucu");

if (terminalHitap2Butonu) {

    terminalHitap2Butonu.addEventListener("click", () => {

        const cevap =
            terminalTemizle(
                terminalHitap2
                    ? terminalHitap2.value
                    : ""
            );

        if (cevap === "inatçı keçi") {

            goster(terminalHitap2Sonucu);

            terminalHitap2Sonucu.textContent =
                "> VERİ DOĞRULANDI ✓\n" +
                "> KAYIT #02 EŞLEŞTİ.";

            terminalHitap2Sonucu.classList.add(
                "terminal-dogru"
            );

            if (terminalHitap2) {
                terminalHitap2.disabled = true;
            }

            terminalHitap2Butonu.disabled = true;

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT #02 DOĞRULANDI.";
            }

            setTimeout(() => {

                gizle(terminalKayit2Ekrani);
                goster(terminalSifreEkrani);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "ŞİFRELEME KATMANI AÇILDI.";
                }

            }, 1500);

        } else {

            goster(terminalHitap2Sonucu);

            terminalHitap2Sonucu.textContent =
                "> VERİ EŞLEŞMEDİ.\n" +
                "> İPUCUNU YENİDEN DEĞERLENDİR.";

            terminalHitap2Sonucu.classList.remove(
                "terminal-dogru"
            );

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "KAYIT #02 DOĞRULANAMADI.";
            }

        }

    });

}


// ==========================================================
// PIN
// ==========================================================

const terminalPinInput =
    eleman("terminalPinInput");

const terminalPinButonu =
    eleman("terminalPinButonu");

const terminalPinSonucu =
    eleman("terminalPinSonucu");

if (terminalPinButonu) {

    terminalPinButonu.addEventListener("click", () => {

        const pin =
            terminalTemizle(
                terminalPinInput
                    ? terminalPinInput.value
                    : ""
            );

        if (pin === "dm") {

            goster(terminalPinSonucu);

            terminalPinSonucu.textContent =
                "> PIN DOĞRULANDI ✓\n" +
                "> ŞİFRELEME KATMANI AŞILDI.";

            terminalPinSonucu.classList.add(
                "terminal-dogru"
            );

            if (terminalPinInput) {
                terminalPinInput.disabled = true;
            }

            terminalPinButonu.disabled = true;

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "PIN DOĞRULANDI.";
            }

            setTimeout(() => {

                gizle(terminalSifreEkrani);
                goster(terminalMesajEkrani);

                if (sistemMesaji) {
                    sistemMesaji.textContent =
                        "GİZLİ VERİYE ERİŞİM SAĞLANDI.";
                }

            }, 1800);

        } else {

            goster(terminalPinSonucu);

            terminalPinSonucu.textContent =
                "> PIN HATALI.\n" +
                "> ŞİFRELEME KURALINI YENİDEN İNCELE.";

            terminalPinSonucu.classList.remove(
                "terminal-dogru"
            );

            if (sistemMesaji) {
                sistemMesaji.textContent =
                    "PIN DOĞRULANAMADI.";
            }

        }

    });

}


// ==========================================================
// ALBÜM ELEMANLARI
// ==========================================================

const albumAcButonu =
    eleman("albumAcButonu");

const albumGeriButonu =
    eleman("albumGeriButonu");

const albumIleriButonu =
    eleman("albumIleriButonu");

const kasaAcButonu =
    eleman("kasaAcButonu");

const kasaAlbumGeriButonu =
    eleman("kasaAlbumGeriButonu");

const albumKitap =
    eleman("albumKitap");

const albumSayfaBilgisi =
    eleman("albumSayfaBilgisi");

const albumAltDurum =
    eleman("albumAltDurum");


// ==========================================================
// SOL SAYFA
// ==========================================================

const solFoto = eleman("solFoto");
const solFotoNot = eleman("solFotoNot");
const solTarih = eleman("solTarih");
const solArsivNot = eleman("solArsivNot");
const solSayfaNumara = eleman("solSayfaNumara");
const solIsaret = eleman("solIsaret");
const solFotoHata = eleman("solFotoHata");
const solBosKayit = eleman("solBosKayit");


// ==========================================================
// SAĞ SAYFA
// ==========================================================

const sagFoto = eleman("sagFoto");
const sagFotoNot = eleman("sagFotoNot");
const sagTarih = eleman("sagTarih");
const sagArsivNot = eleman("sagArsivNot");
const sagSayfaNumara = eleman("sagSayfaNumara");
const sagIsaret = eleman("sagIsaret");
const sagFotoHata = eleman("sagFotoHata");
const sagBosKayit = eleman("sagBosKayit");


// ==========================================================
// KASA
// ==========================================================

const kasa =
    document.querySelector(".kasa");

const kasaSifre =
    eleman("kasaSifre");

const kasaUyari =
    eleman("kasaUyari");


// ==========================================================
// ALBÜM VERİLERİ
// ==========================================================

const albumVerileri = [
    {
        foto: "assets/images/1.jpeg",
        kisa: "Her şeyin başladığı kayıt.",
        tarih: "KAYIT: 001 // BAŞLANGIÇ",
        not: "Dosyanın ilk görüntüsü. Henüz ortada bir hikâye yok gibi görünüyor. Sadece aynı zamanın içinde bulunan iki insan ve ileride anlam kazanacak sıradan bir an. Arşiv, bu kaydı başlangıç olarak işaretlemiş."
    },
    {
        foto: "assets/images/2.jpeg",
        kisa: "İlk işaret kayıtlara geçti.",
        tarih: "KAYIT: 002 // İŞARET",
        not: "İlk kaydın ardından küçük bir değişiklik fark edildi. Önemsiz sayılabilecek bir hareket, dosyada ikinci bir iz bıraktı. O sırada bunun bir başlangıç olduğu henüz anlaşılmamıştı."
    },
    {
        foto: "assets/images/3.jpeg",
        kisa: "İlk kaçış noktası.",
        tarih: "KAYIT: 003 // MUSAÖZÜ",
        not: "Arşivdeki ilk belirgin rota burada ortaya çıkıyor. Öncesinde yaşanan küçük bir gerilimin ardından aynı günün başka bir yere, başka bir sohbete ve başka bir hikâyeye dönüştüğü görülüyor. Kayıtlar ilk kez birlikte geçirilen zamanın kendi başına bir anlam taşımaya başladığını gösteriyor."
    },
    {
        foto: "assets/images/4.jpeg",
        kisa: "Bir oyun, beklenmedik bir söz.",
        tarih: "KAYIT: 004 // TAVLA",
        not: "Dosyaya yeni bir detay eklendi: bir tavla karşılaşması ve sonucundan daha uzun ömürlü bir anlaşma. Kazananın istediği bir şeyi yaptırma hakkı. Küçük bir oyun olarak başlayan bu kayıt, arşivde uzun süre saklanacak."
    },
    {
        foto: "assets/images/5.jpeg",
        kisa: "Huzurlu görünen bir gün.",
        tarih: "KAYIT: 005 // HAMAK",
        not: "Hikâye artık yalnızca büyük olaylardan oluşmuyor. Bir hamak, uzun bir gün ve araya karışan küçük bir kene detayı. Dosya ilerledikçe sıradan görünen anların daha fazla yer kapladığı fark ediliyor."
    },
    {
        foto: "assets/images/6.jpeg",
        kisa: "Birlikte geçirilen zaman uzuyor.",
        tarih: "KAYIT: 006 // TATİL",
        not: "İki kişinin aynı günün içinde daha fazla zaman geçirmeye başladığı görülüyor. Belirgin bir dönüm noktası yok. Fakat kayıtlar arasındaki boşluk giderek azalıyor. Hikâye fark edilmeden büyüyor."
    },
    {
        foto: "assets/images/7.jpeg",
        kisa: "Dosyada ilk önemli tarih bulundu.",
        tarih: "KAYIT: 007 // KÜÇÜKKÖY //25.08.2025",
        not: "Bu kayıt diğerlerinden farklı. Bir yıl önce başlayan hikâyenin ilk kez kendi yıldönümüne ulaştığı akşam. Aynı masada oturup geride kalan zamanı konuşurken, geçen bir yılın aslında ne kadar çok anı biriktirdiği fark edildi. O gece kutlanan yalnızca bir tarih değildi; birlikte gelinen yoldu."
    },
    {
        foto: "assets/images/8.jpeg",
        kisa: "Aynı yer, başka bir akşam.",
        tarih: "KAYIT: 008 // KÜÇÜKKÖY GÜNLERİ",
        not: "Bir kez gidilen bir yerin yeniden ziyaret edildiği görülüyor. Rota aynı olabilir, fakat kayıtların anlamı değişmiş durumda. Artık önemli olan gidilen yer değil; o yolun birlikte alınması."
    },
    {
        foto: "assets/images/9.jpeg",
        kisa: "Hikâye yeni bir şehre ulaşıyor.",
        tarih: "KAYIT: 009 // DÜZCE",
        not: "Dosyada yeni bir konum beliriyor. Düzce. Hikâye artık tek bir yerde yaşanmıyor. Mesafeler değişiyor, şehirler değişiyor, fakat kayıtların arasındaki bağ devam ediyor."
    },
    {
        foto: "assets/images/10.jpeg",
        kisa: "Birlikte yapılan ilk planlardan biri.",
        tarih: "KAYIT: 010 // SİNEMA",
        not: "Akşam için yapılan bir plan. Filmin adı arşivde net olarak korunamamış. Buna karşılık o günün kendisi kaybolmamış. Bazı kayıtların neden saklandığı artık daha anlaşılır."
    },
    {
        foto: "assets/images/11.jpeg",
        kisa: "Hikâye kışa kadar ulaştı.",
        tarih: "KAYIT: 011 // KIŞ",
        not: "Mevsim değişmiş. Dosya hâlâ devam ediyor. Soğuk havaya rağmen kayıtların arasındaki mesafe kısalmaya devam ediyor. İki günlük bir kaçamak, arşivde sessiz ama önemli bir yer edinmiş."
    },
    {
        foto: "assets/images/12.jpeg",
        kisa: "Bir sabah daha dosyaya eklendi.",
        tarih: "KAYIT: 012 // KAHVALTI",
        not: "Hikâyenin büyük anlarından biri değil. Sadece birlikte geçirilen sıradan bir sabah. Fakat arşiv tam da bu noktada önemli bir şey fark ediyor: artık sıradan günler bile kayda değer."
    },
    {
        foto: "assets/images/13.jpeg",
        kisa: "Dosyanın sınırları genişliyor.",
        tarih: "KAYIT: 013 // İLK ZİYARET",
        not: "Bir adres daha dosyaya dahil oluyor. Birinin diğerinin dünyasına biraz daha yaklaşması, arşiv tarafından yeni bir aşama olarak işaretlenmiş. Hikâye artık yalnızca dışarıda yaşanmıyor."
    },
    {
        foto: "assets/images/14.jpeg",
        kisa: "Mesafeler önemini kaybediyor.",
        tarih: "KAYIT: 014 // MANGAL",
        not: "Bu kayıt, gidilen yolun uzunluğuyla dikkat çekiyor. Bir mangal için ciddi miktarda yol alınmış. Sistem mesafenin neden sorun olmadığını çözmeye çalışıyor. Cevap kayıtlarda açıkça görülüyor."
    },
    {
        foto: "assets/images/15.jpeg",
        kisa: "Plan yapılmadı. Yine de gidildi.",
        tarih: "KAYIT: 015 // GÜNLÜK HAYAT",
        not: "Özel bir sebep yok. Büyük bir plan yok. Sadece birlikte kahvaltıya gidilen bir gün. Dosya artık önemli anları değil, birlikte geçirilen zamanı kaydetmeye başlamış durumda."
    },
    {
        foto: "assets/images/16.jpeg",
        kisa: "Bazı kayıtlar taşınmaya başladı.",
        tarih: "KAYIT: 016 // KİŞİSEL ARŞİV",
        not: "Bu kez kayıt bir cüzdanda bulunuyor. Fotoğraf artık yalnızca dosyanın içinde değil; günlük hayatın bir parçası hâline gelmiş. Arşiv için bu, hikâyenin sessiz dönüm noktalarından biri."
    },
    {
        foto: "assets/images/17.jpeg",
        kisa: "Bir alışkanlık oluştu.",
        tarih: "KAYIT: 017 // RUTİN",
        not: "Her araba yolculuğunun sonunda tekrarlandığı tespit edilen bir cümle. 'Yanağını sil.' Küçük bir uyarı zamanla dosyanın kendi diline dönüşmüş. Hikâyelerin bazı parçaları böyle oluşuyor."
    },
    {
        foto: "assets/images/18.jpeg",
        kisa: "Hikâyeye yeni insanlar dahil oldu.",
        tarih: "KAYIT: 018 // ARKADAŞLAR",
        not: "Dosyanın kadrajı genişliyor. Artık yalnızca iki kişilik anlar değil, çevresindeki insanların da şahit olduğu zamanlar kaydediliyor. Hikâye kendi dünyasını oluşturmaya başlamış."
    },
    {
        foto: "assets/images/19.jpeg",
        kisa: "Başlangıç artık geride kaldı.",
        tarih: "KAYIT: 019 // İLK ZAMANLAR",
        not: "İlk kayıtlarla bu görüntü arasındaki fark dikkat çekici. Başlangıçta birbirine rastlayan iki insan varken şimdi arşivde birbirinin hayatına yerleşmiş iki kişi var. Değişimin tam olarak ne zaman gerçekleştiği belirlenemedi."
    },
    {
        foto: "assets/images/20.jpeg",
        kisa: "Birlikte geçirilen günlerin sayısı arttı.",
        tarih: "KAYIT: 020 // TATİL",
        not: "Dosya artık tek tek günleri değil, biriken zamanı anlatıyor. Uzun bir gün daha arşive eklendi. Büyük bir olay yaşanmadı. Buna rağmen kayıt silinmedi."
    },
    {
        foto: "assets/images/21.jpeg",
        kisa: "Bir gün daha.",
        tarih: "KAYIT: 021 // TATİL",
        not: "Bir önceki kaydın ardından başka bir gün daha saklanmış. Hikâyenin en dikkat çekici tarafı artık olayların büyüklüğü değil, devamlılığı. Birlikte geçirilen zaman kendi başına yeterli hâle gelmiş."
    },
    {
        foto: "assets/images/22.jpeg",
        kisa: "Sistem ilk kez kandırıldı.",
        tarih: "KAYIT: 022 // SEVGİLİLER GÜNÜ",
        not: "Dosyada olağandışı bir hareket tespit edildi. Düzce'ye gidildiği söylenmiş, fakat gerçek konum Eskişehir olarak kaydedilmiş. Sistem kısa süreliğine yanıltıldı. Operasyon başarıyla tamamlandı."
    },
    {
        foto: "assets/images/23.jpeg",
        kisa: "Uzun bir dönemin ardından yeniden aynı yerde.",
        tarih: "KAYIT: 023 // RAMAZAN",
        not: "Uzun bir ayın ardından gelen ilk iftar. Başlangıçta yalnızca yemek için bir araya gelinmiş olabilir. Fakat kayıt, masada yemeğin yanında uzun bir sohbetin de bulunduğunu gösteriyor."
    },
    {
        foto: "assets/images/24.jpeg",
        kisa: "Zaman yine kayıtlardan silindi.",
        tarih: "KAYIT: 024 // GECE",
        not: "Gece başlayan konuşmanın sabaha kadar devam ettiği tespit edildi. Saatler ilerlemiş fakat konuşma sona ermemiş. Sistem bu durumu açıklayamıyor. Dosyaya yalnızca tek bir not düşülmüş: 'Zaman burada farklı çalışıyor.'"
    },
    {
        foto: "assets/images/25.jpeg",
        kisa: "Bazı şeyler değişmedi.",
        tarih: "KAYIT: 025 // MANGAL",
        not: "Arşiv bir kez daha aynı sonuca ulaşıyor: yol, yemek, uzun sohbet ve birlikte geçirilen bir gün. Bazı şeyler tekrar ediyor. Belki de hikâyenin güzelliği tam olarak burada."
    },
    {
        foto: "assets/images/26.jpeg",
        kisa: "Kayıt alınması planlanmıyordu.",
        tarih: "KAYIT: 026 // DOĞAL AN",
        not: "Hazırlıksız yakalanmış bir an. Poz verilmemiş, özel bir plan yapılmamış. Yine de görüntü saklanmış. Çünkü hikâyenin en gerçek parçaları çoğu zaman kimsenin kaydetmeyi düşünmediği anlarda ortaya çıkıyor."
    },
    {
        foto: "assets/images/27.jpeg",
        kisa: "Hikâye yeni bir yere ilerliyor.",
        tarih: "KAYIT: 027 // GEZİ",
        not: "Yeni bir rota, yeni bir yer ve dosyaya eklenen başka bir gün. Hayvanat bahçesi kaydı, hikâyenin hâlâ hareket hâlinde olduğunu gösteriyor. Arşiv büyümeye devam ediyor."
    },
    {
        foto: "assets/images/28.jpeg",
        kisa: "Tek bir gün iki kayıt bıraktı.",
        tarih: "KAYIT: 028 // GEZİ DEVAMI",
        not: "Aynı günün başka bir anı. Tek bir görüntü yeterli olmamış olacak ki arşiv ikinci bir kayıt daha saklamış. Bazı günlerin neden iki kez hatırlanmak istendiğini sistem açıklayamıyor."
    },
    {
        foto: "assets/images/29.jpeg",
        kisa: "Dosyanın son kaydı bulundu.",
        tarih: "KAYIT: 029 // SON GÖRÜNTÜ",
        not: "Arşivdeki son görüntü burada. Dosya tarandı, kayıtlar eşleştirildi ve başlangıçtan bu ana kadar uzanan bütün izler bir araya getirildi. Fakat sistem bir tutarsızlık tespit ediyor: Dosya tamamlanmış görünüyor. Hikâye ise tamamlanmamış."
    },
    {
        foto: null,
        kisa: "SON KAYIT: BEKLEMEDE.",
        tarih: "KAYIT: 030 // GELECEK",
        not: "Arşivde bu kayıt için henüz bir görüntü bulunmuyor. Çünkü bazı hikâyelerin sonu geçmişte saklı değildir. Bazı kayıtlar henüz yaşanmadı. Bu dosya burada bitmiyor; yalnızca bir sonraki kaydı bekliyor."
    }
];


// ==========================================================
// GİZLİ İŞARET
// ==========================================================

const arsivIsaretleri = {
    7: "TARİH"
};


// ==========================================================
// ALBÜM DURUMU
// ==========================================================

let albumSpread = 0;
let albumAnimasyon = false;

const albumToplam =
    albumVerileri.length;

const albumToplamSpread =
    Math.ceil(albumToplam / 2);


// ==========================================================
// SAYI
// ==========================================================

function albumSayi(numara) {
    return String(numara).padStart(2, "0");
}


// ==========================================================
// SES
// ==========================================================

let albumAudioContext = null;

function sayfaCevirmeSesi() {

    try {

        if (!albumAudioContext) {

            albumAudioContext =
                new (
                    window.AudioContext ||
                    window.webkitAudioContext
                )();

        }

        if (
            albumAudioContext.state ===
            "suspended"
        ) {
            albumAudioContext.resume();
        }

        const ctx = albumAudioContext;
        const now = ctx.currentTime;
        const duration = 0.42;

        const buffer =
            ctx.createBuffer(
                1,
                Math.floor(
                    ctx.sampleRate * duration
                ),
                ctx.sampleRate
            );

        const data =
            buffer.getChannelData(0);

        for (
            let i = 0;
            i < data.length;
            i++
        ) {

            const ilerleme =
                i / data.length;

            data[i] =
                (
                    Math.random() * 2 - 1
                ) *
                Math.sin(
                    ilerleme * Math.PI
                );

        }

        const noise =
            ctx.createBufferSource();

        noise.buffer = buffer;

        const filtre =
            ctx.createBiquadFilter();

        filtre.type = "bandpass";
        filtre.frequency.value = 1700;
        filtre.Q.value = 0.7;

        const gain =
            ctx.createGain();

        gain.gain.setValueAtTime(
            0.0001,
            now
        );

        gain.gain.linearRampToValueAtTime(
            0.055,
            now + 0.06
        );

        gain.gain.exponentialRampToValueAtTime(
            0.0001,
            now + duration
        );

        noise
            .connect(filtre)
            .connect(gain)
            .connect(ctx.destination);

        noise.start(now);
        noise.stop(now + duration);

    } catch (hata) {

        console.log(
            "Sayfa sesi başlatılamadı:",
            hata
        );

    }
}


// ==========================================================
// SAYFA TEMİZLE
// ==========================================================

function sayfayiTemizle(
    foto,
    fotoNot,
    tarih,
    arsivNot,
    numara,
    isaret,
    fotoHata,
    bosKayit
) {

    if (foto) {
        foto.removeAttribute("src");
        foto.alt = "";
        foto.style.visibility = "hidden";
    }

    if (fotoNot) {
        fotoNot.textContent = "";
    }

    if (tarih) {
        tarih.textContent = "";
    }

    if (arsivNot) {
        arsivNot.textContent = "";
    }

    if (numara) {
        numara.textContent = "";
    }

    if (isaret) {
        isaret.classList.add("gizli");
        isaret.removeAttribute("title");
    }

    if (fotoHata) {
        fotoHata.classList.remove("goster");
    }

    if (bosKayit) {
        bosKayit.classList.remove("goster");
    }
}


// ==========================================================
// SAYFA DOLDUR
// ==========================================================

function sayfayiDoldur(
    kayit,
    foto,
    fotoNot,
    tarih,
    arsivNot,
    numara,
    isaret,
    fotoHata,
    bosKayit,
    kayitNo
) {

    sayfayiTemizle(
        foto,
        fotoNot,
        tarih,
        arsivNot,
        numara,
        isaret,
        fotoHata,
        bosKayit
    );

    if (!kayit) {
        return;
    }

    if (fotoNot) {
        fotoNot.textContent =
            kayit.kisa;
    }

    if (tarih) {
        tarih.textContent =
            kayit.tarih;
    }

    if (arsivNot) {
        arsivNot.textContent =
            kayit.not;
    }

    if (numara) {
        numara.textContent =
            albumSayi(kayitNo);
    }

    if (!kayit.foto) {

        if (bosKayit) {
            bosKayit.classList.add("goster");
        }

        return;
    }

    if (foto) {

        foto.style.visibility =
            "visible";

        foto.src =
            kayit.foto;

        foto.alt =
            `Arşiv fotoğrafı ${albumSayi(kayitNo)}`;

    }

    if (
        arsivIsaretleri[kayitNo] &&
        isaret
    ) {

        isaret.classList.remove("gizli");

        isaret.title =
            "Bu kayıt önemli.";

    }
}


// ==========================================================
// ALBÜMÜ GÜNCELLE
// ==========================================================

function albumSayfalariGuncelle() {

    if (!albumVerileri.length) {
        return;
    }

    const solIndex =
        albumSpread * 2;

    const sagIndex =
        solIndex + 1;

    const sol =
        albumVerileri[solIndex];

    const sag =
        albumVerileri[sagIndex];


    sayfayiDoldur(
        sol,
        solFoto,
        solFotoNot,
        solTarih,
        solArsivNot,
        solSayfaNumara,
        solIsaret,
        solFotoHata,
        solBosKayit,
        solIndex + 1
    );


    sayfayiDoldur(
        sag,
        sagFoto,
        sagFotoNot,
        sagTarih,
        sagArsivNot,
        sagSayfaNumara,
        sagIsaret,
        sagFotoHata,
        sagBosKayit,
        sagIndex + 1
    );


    if (albumSayfaBilgisi) {

        if (sag) {

            albumSayfaBilgisi.textContent =
                `KAYIT ${albumSayi(solIndex + 1)} — ${albumSayi(sagIndex + 1)} / ${albumToplam}`;

        } else {

            albumSayfaBilgisi.textContent =
                `KAYIT ${albumSayi(solIndex + 1)} / ${albumToplam}`;

        }

    }


    if (albumGeriButonu) {

        albumGeriButonu.disabled =
            albumSpread === 0 ||
            albumAnimasyon;

    }


    if (albumIleriButonu) {

        albumIleriButonu.disabled =
            albumAnimasyon;

    }


    if (albumAltDurum) {

        if (
            albumSpread ===
            albumToplamSpread - 1
        ) {

            albumAltDurum.textContent =
                "SON KAYIT İNCELENİYOR...";

        } else {

            albumAltDurum.textContent =
                "ARŞİV TARANIYOR...";

        }

    }


    if (albumGizliNot) {

        if (albumSpread >= 3) {
            albumGizliNot.classList.remove("gizli");
        } else {
            albumGizliNot.classList.add("gizli");
        }

    }

}


// ==========================================================
// FOTOĞRAF HATALARI
// ==========================================================

if (solFoto) {

    solFoto.addEventListener(
        "error",
        () => {

            solFoto.style.visibility =
                "hidden";

            if (solFotoHata) {
                solFotoHata.classList.add("goster");
            }

        }
    );

}

if (sagFoto) {

    sagFoto.addEventListener(
        "error",
        () => {

            sagFoto.style.visibility =
                "hidden";

            if (sagFotoHata) {
                sagFotoHata.classList.add("goster");
            }

        }
    );

}


// ==========================================================
// ÇEVRİLEN SAYFA
// ==========================================================

function cevrilenSayfaOlustur(
    kaynakSayfa,
    yon
) {

    if (
        !kaynakSayfa ||
        !albumKitap
    ) {
        return null;
    }

    const sayfa =
        kaynakSayfa.cloneNode(true);

    sayfa.removeAttribute("id");

    sayfa
        .querySelectorAll("[id]")
        .forEach((element) => {
            element.removeAttribute("id");
        });

    sayfa.classList.remove(
        "album-sol-sayfa",
        "album-sag-sayfa"
    );

    sayfa.classList.add(
        "album-cevrilen-sayfa",
        yon
    );

    // KRİTİK:
    // Çevrilen kopya hiçbir şekilde tıklama yakalamayacak.
    sayfa.style.pointerEvents =
        "none";

    albumKitap.appendChild(sayfa);

    requestAnimationFrame(() => {

        requestAnimationFrame(() => {

            sayfa.classList.add(
                "ceviriliyor"
            );

        });

    });

    return sayfa;
}


// ==========================================================
// ALBÜM → İLERİ
// ==========================================================

function albumIleriGit() {

    if (
        albumAnimasyon ||
        !albumIleriButonu
    ) {
        return;
    }

    albumAnimasyon = true;

    if (albumIleriButonu) {
        albumIleriButonu.disabled = true;
    }

    if (albumGeriButonu) {
        albumGeriButonu.disabled = true;
    }


    // Son kayıt
    if (
        albumSpread >=
        albumToplamSpread - 1
    ) {

        if (albumAltDurum) {
            albumAltDurum.textContent =
                "ARŞİV TAMAMLANDI...";
        }

        sayfaCevirmeSesi();

        setTimeout(() => {

            albumAnimasyon = false;

            kasaEkraniniAc();

        }, 900);

        return;
    }


    if (albumAltDurum) {
        albumAltDurum.textContent =
            "SAYFA ÇEVRİLİYOR...";
    }

    sayfaCevirmeSesi();


    const sagSayfa =
        eleman("albumSagSayfa");


    const cevrilen =
        cevrilenSayfaOlustur(
            sagSayfa,
            "ileri"
        );


    setTimeout(() => {

        try {

            albumSpread++;

            albumSayfalariGuncelle();

            if (cevrilen) {
                cevrilen.remove();
            }

        } catch (hata) {

            console.error(
                "Albüm ileri geçiş hatası:",
                hata
            );

        } finally {

            albumAnimasyon = false;

            albumSayfalariGuncelle();

        }

    }, 900);

}


// ==========================================================
// ALBÜM → GERİ
// ==========================================================

function albumGeriGit() {

    if (
        albumAnimasyon ||
        albumSpread <= 0
    ) {
        return;
    }

    albumAnimasyon = true;

    if (albumIleriButonu) {
        albumIleriButonu.disabled = true;
    }

    if (albumGeriButonu) {
        albumGeriButonu.disabled = true;
    }

    if (albumAltDurum) {
        albumAltDurum.textContent =
            "ÖNCEKİ SAYFA ÇEVRİLİYOR...";
    }

    sayfaCevirmeSesi();


    const solSayfa =
        eleman("albumSolSayfa");


    const cevrilen =
        cevrilenSayfaOlustur(
            solSayfa,
            "geri"
        );


    setTimeout(() => {

        try {

            albumSpread--;

            albumSayfalariGuncelle();

            if (cevrilen) {
                cevrilen.remove();
            }

        } catch (hata) {

            console.error(
                "Albüm geri geçiş hatası:",
                hata
            );

        } finally {

            albumAnimasyon = false;

            albumSayfalariGuncelle();

        }

    }, 900);

}


// ==========================================================
// KASA
// ==========================================================

function kasaEkraniniAc() {

    gizle(albumSahnesi);

    goster(albumKasaEkrani);

    gizle(albumBolum4Gecis);

    if (kasaSifre) {
        kasaSifre.value = "";
    }

    if (kasaUyari) {
        kasaUyari.innerHTML =
            "İŞARETLİ KAYDIN TARİHİNİ HATIRLA.<br>GÜN + AY";
    }

    setTimeout(() => {

        if (kasaSifre) {
            kasaSifre.focus();
        }

    }, 400);

}


// ==========================================================
// KASA → ALBÜM
// ==========================================================

function kasaAlbumuneDon() {

    gizle(albumKasaEkrani);

    goster(albumSahnesi);

    albumAnimasyon = false;

    albumSayfalariGuncelle();

}


// ==========================================================
// KASA ŞİFRESİ
// ==========================================================

const KASA_SIFRESI =
    "2508";

function kasaAc() {

    if (!kasaSifre) {
        return;
    }

    const girilenSifre =
        kasaSifre.value
            .replace(/\D/g, "")
            .slice(0, 4);

    kasaSifre.value =
        girilenSifre;


    if (
        girilenSifre.length !== 4
    ) {

        if (kasaUyari) {
            kasaUyari.textContent =
                "DÖRT HANELİ TARİH GİRİLMELİ.";
        }

        return;
    }


    if (
        girilenSifre ===
        KASA_SIFRESI
    ) {

        if (kasaUyari) {
            kasaUyari.textContent =
                "KAYIT DOĞRULANDI. ARŞİV TAMAMLANDI.";
        }

        if (kasaAcButonu) {
            kasaAcButonu.disabled = true;
        }

        kasaSifre.disabled = true;


        setTimeout(() => {

            gizle(albumKasaEkrani);
            goster(albumBolum4Gecis);

            bolum4Baslat();

        }, 1000);

        return;
    }


    if (kasaUyari) {
        kasaUyari.textContent =
            "ERİŞİM REDDEDİLDİ. TARİH EŞLEŞMİYOR.";
    }

    if (kasa) {

        kasa.classList.remove("hata");

        void kasa.offsetWidth;

        kasa.classList.add("hata");

    }

    kasaSifre.select();

}


// ==========================================================
// ALBÜMÜ AÇ
// ==========================================================

if (albumAcButonu) {

    albumAcButonu.addEventListener(
        "click",
        () => {

            albumAcButonu.disabled = true;

            albumSpread = 0;
            albumAnimasyon = false;

            gizle(albumKapakEkrani);

            goster(albumSahnesi);

            gizle(albumKasaEkrani);
            gizle(albumBolum4Gecis);

            if (kasaSifre) {
                kasaSifre.disabled = false;
                kasaSifre.value = "";
            }

            if (kasaAcButonu) {
                kasaAcButonu.disabled = false;
            }

            albumSayfalariGuncelle();

            sayfaCevirmeSesi();

        }
    );

}


// ==========================================================
// ALBÜM BUTONLARI
// ==========================================================

if (albumIleriButonu) {

    albumIleriButonu.addEventListener(
        "click",
        albumIleriGit
    );

}

if (albumGeriButonu) {

    albumGeriButonu.addEventListener(
        "click",
        albumGeriGit
    );

}


// ==========================================================
// KASA BUTONLARI
// ==========================================================

if (kasaAcButonu) {

    kasaAcButonu.addEventListener(
        "click",
        kasaAc
    );

}

if (kasaAlbumGeriButonu) {

    kasaAlbumGeriButonu.addEventListener(
        "click",
        kasaAlbumuneDon
    );

}


// ==========================================================
// KASA ENTER
// ==========================================================

if (kasaSifre) {

    kasaSifre.addEventListener(
        "keydown",
        (event) => {

            if (event.key === "Enter") {
                kasaAc();
            }

        }
    );

    kasaSifre.addEventListener(
        "input",
        () => {

            kasaSifre.value =
                kasaSifre.value
                    .replace(/\D/g, "")
                    .slice(0, 4);

        }
    );

}


// ==========================================================
// BÖLÜM 02 → BÖLÜM 03
// ==========================================================

const bolum3GecisButonu =
    eleman("bolum3GecisButonu");

if (bolum3GecisButonu) {

    bolum3GecisButonu.addEventListener(
        "click",
        () => {

            gizle(terminalBaslangicEkrani);
            gizle(terminalKayit1Ekrani);
            gizle(terminalKayit2Ekrani);
            gizle(terminalSifreEkrani);
            gizle(terminalMesajEkrani);

            goster(albumBolumu);

            goster(albumKapakEkrani);

            gizle(albumSahnesi);
            gizle(albumKasaEkrani);
            gizle(albumBolum4Gecis);

            albumSpread = 0;
            albumAnimasyon = false;

            if (albumAcButonu) {
                albumAcButonu.disabled = false;
            }

            if (kasaSifre) {
                kasaSifre.disabled = false;
            }

            if (kasaAcButonu) {
                kasaAcButonu.disabled = false;
            }

            if (albumGizliNot) {
                albumGizliNot.classList.add("gizli");
            }

            albumSayfalariGuncelle();

        }
    );

}


// ==========================================================
// BAŞLANGIÇ
// ==========================================================

if (albumBolumu) {
    albumBolumu.classList.add("gizli");
}

if (albumKapakEkrani) {
    albumKapakEkrani.classList.remove("gizli");
}

if (albumSahnesi) {
    albumSahnesi.classList.add("gizli");
}

if (albumKasaEkrani) {
    albumKasaEkrani.classList.add("gizli");
}

if (albumBolum4Gecis) {
    albumBolum4Gecis.classList.add("gizli");
}

if (albumGizliNot) {
    albumGizliNot.classList.add("gizli");
}

albumSpread = 0;
albumAnimasyon = false;

if (
    albumSayfaBilgisi &&
    albumAltDurum
) {
    albumSayfalariGuncelle();
}


// ==========================================================
// BÖLÜM 04
// ==========================================================

const bolum4 =
    eleman("bolum4");

const crtCizirti =
    eleman("crtCizirti");

const kayitYukleme =
    eleman("kayitYukleme");

const kayitDurumu =
    eleman("kayitDurumu");

const kayitAltDurumu =
    eleman("kayitAltDurumu");

const kayitProgress =
    eleman("kayitProgress");

const finalVideo =
    eleman("finalVideo");

const crtRec =
    eleman("crtRec");

let bolum4Baslatildi = false;


// ==========================================================
// BÖLÜM 04 BAŞLAT
// ==========================================================

function bolum4Baslat() {

    if (bolum4Baslatildi) {
        return;
    }

    bolum4Baslatildi = true;


    // Önce albümün bütün parçalarını kapat.
    gizle(albumBolumu);


    // Son ekranı aç.
    goster(bolum4);


    if (kayitYukleme) {
        kayitYukleme.classList.remove("gizli");
    }

    if (crtCizirti) {
        crtCizirti.classList.remove("gizli");
    }

    if (crtRec) {
        crtRec.classList.add("gizli");
    }


    if (finalVideo) {

        finalVideo.classList.remove("aktif");

        try {
            finalVideo.pause();
            finalVideo.currentTime = 0;
        } catch (hata) {
            console.log(
                "Video sıfırlanamadı:",
                hata
            );
        }

    }


    if (kayitDurumu) {
        kayitDurumu.textContent =
            "> BAĞLANTI KURULUYOR...";
    }

    if (kayitAltDurumu) {
        kayitAltDurumu.textContent =
            "SİNYAL BEKLENİYOR";
    }

    if (kayitProgress) {
        kayitProgress.textContent =
            "[░░░░░░░░░░░░░░░░░░░░] 0%";
    }


    setTimeout(() => {

        if (kayitDurumu) {
            kayitDurumu.textContent =
                "> SİNYAL ALINIYOR...";
        }

        if (kayitAltDurumu) {
            kayitAltDurumu.textContent =
                "VERİ AKIŞI BAŞLATILDI";
        }

    }, 1000);


    setTimeout(() => {

        if (kayitDurumu) {
            kayitDurumu.textContent =
                "> KAYIT BULUNDU.";
        }

        if (kayitAltDurumu) {
            kayitAltDurumu.textContent =
                "ARŞİV VERİSİ EŞLEŞTİRİLİYOR";
        }

    }, 2200);


    setTimeout(() => {

        if (kayitDurumu) {
            kayitDurumu.textContent =
                "> KAYIT YÜKLENİYOR...";
        }

        if (kayitAltDurumu) {
            kayitAltDurumu.textContent =
                "LÜTFEN BEKLEYİN";
        }

        kayitYuklemeAnimasyonu();

    }, 3300);

}


// ==========================================================
// YÜKLEME
// ==========================================================

function kayitYuklemeAnimasyonu() {

    let ilerleme = 0;

    const interval =
        setInterval(() => {

            ilerleme +=
                Math.floor(
                    Math.random() * 7
                ) + 3;

            if (ilerleme >= 100) {

                ilerleme = 100;

                clearInterval(interval);

            }

            const toplamBlok = 20;

            const doluBlok =
                Math.round(
                    (ilerleme / 100) *
                    toplamBlok
                );

            const bosBlok =
                toplamBlok -
                doluBlok;

            if (kayitProgress) {

                kayitProgress.textContent =
                    "[" +
                    "█".repeat(doluBlok) +
                    "░".repeat(bosBlok) +
                    "] " +
                    ilerleme +
                    "%";

            }

            if (ilerleme === 100) {
                kayitYuklemeTamamlandi();
            }

        }, 180);

}


// ==========================================================
// VİDEO
// ==========================================================

function kayitYuklemeTamamlandi() {

    if (kayitDurumu) {
        kayitDurumu.textContent =
            "> KAYIT HAZIR.";
    }

    if (kayitAltDurumu) {
        kayitAltDurumu.textContent =
            "GÖRÜNTÜ BAŞLATILIYOR";
    }

    setTimeout(() => {

        gizle(kayitYukleme);
        gizle(crtCizirti);
        goster(crtRec);


        if (finalVideo) {

            finalVideo.classList.add("aktif");

            const oynatma =
                finalVideo.play();

            if (
                oynatma !== undefined
            ) {

                oynatma.catch((hata) => {

                    console.log(
                        "Video otomatik başlatılamadı:",
                        hata
                    );

                });

            }

        }

    }, 900);

}