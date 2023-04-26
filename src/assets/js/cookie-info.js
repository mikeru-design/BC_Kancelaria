import PopUpWindow from "./popUp";

export default function cookieInfo() {
    //copyright JGA 2013 under MIT License
    var monster = { set: function (e, t, n, r) { var i = new Date, s = "", o = typeof t, u = ""; r = r || "/", n && (i.setTime(i.getTime() + n * 24 * 60 * 60 * 1e3), s = "; expires=" + i.toGMTString()); if (o === "object" && o !== "undefined") { if (!("JSON" in window)) throw "Bummer, your browser doesn't support JSON parsing."; u = JSON.stringify({ v: t }) } else u = escape(t); document.cookie = e + "=" + u + s + "; path=" + r }, get: function (e) { var t = e + "=", n = document.cookie.split(";"), r = "", i = "", s = {}; for (var o = 0; o < n.length; o++) { var u = n[o]; while (u.charAt(0) == " ") u = u.substring(1, u.length); if (u.indexOf(t) === 0) { r = u.substring(t.length, u.length), i = r.substring(0, 1); if (i == "{") { s = JSON.parse(r); if ("v" in s) return s.v } return r == "undefined" ? undefined : unescape(r) } } return null }, remove: function (e) { this.set(e, "", -1) }, increment: function (e, t) { var n = this.get(e) || 0; this.set(e, parseInt(n, 10) + 1, t) }, decrement: function (e, t) { var n = this.get(e) || 0; this.set(e, parseInt(n, 10) - 1, t) } };

    if (monster.get('cookieInfo') === 'true') {
        return false;
    }

    var container = document.createElement('div'),
        accept = document.createElement('a'),
        link = document.createElement('a');

    container.setAttribute('id', 'cookieInfo');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<p>Ta strona używa ciasteczek (cookies), dzięki czemu może działać lepiej i szybciej</p>';

    accept.setAttribute('href', '#');
    accept.setAttribute('title', 'Close');
    accept.setAttribute('class', 'accept');
    accept.innerHTML = 'Rozumiem';

    link.setAttribute('href', '#');
    link.setAttribute('class', 'link');
    link.innerText = 'Czytaj więcej';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        container.setAttribute('style', 'opacity: 1');

        var interval = window.setInterval(function () {
            container.style.opacity -= 0.01;

            if (container.style.opacity <= 0.02) {
                document.body.removeChild(container);
                window.clearInterval(interval);
                monster.set('cookieInfo', 'true', 365);
            }
        }, 4);
    }

    function createWindow(){
        const cookieWindow = document.querySelector('.cookieWindow');
        const cookieText = `
            <div class="description">
                <p>
                Wypełniając obowiązek prawny nałożony przepisem art. 13 rozporządzenia Parlamentu Europejskiego i Rady (UE) 2016/679 z dnia 27 kwietnia 2016 r. w sprawie ochrony osób fizycznych w związku z przetwarzaniem danych osobowych i w sprawie swobodnego przepływu takich danych oraz uchylenia dyrektywy 95/46/WE (ogólne rozporządzenie o ochronie danych) (Dz. Urz. UE L 119 z 04.05.2016 r.), dalej jako RODO, informujemy, że:
                1.	Administratorem Państwa danych osobowych jest spółka Bargiel & Chmielewska-Łagód Adwokaci Spółka Partnerska z siedzibą w Warszawie (zwana dalej Administratorem).
                2.	Kontakt z Administratorem jest możliwy pod adresem: Aleja Solidarności 155 lok. 3, 00-877 Warszawa.
                3.	Dane osobowe zbierane są w celach prawnie uzasadnionych w tym w realizacji zobowiązań umownych określonych w przepisie art. 6 ust. 1 lit. B RODO. Celem przetwarzania danych jest także, pod warunkiem wyrażenia zgody, marketing bezpośredni i personalny (art. 6 ust. 1 lit. a RODO), ewentualnie także – w wyraźnie wskazanych wypadkach zgodnie z art. 6 ust. 1 lit. f. Dane osobowe przetwarzane przez Administratora, objęte są tajemnicą adwokacką, o których mówią przepisy dotyczące zachowania tajemnicy zawodowej.
                3.	Odbiorcą Państwa danych osobowych będą wszystkie podmioty, którym przekazanie tych danych jest niezbędne dla realizacji zobowiązań umownych w szczególności:
                a) upoważnieni do przetwarzania danych osobowych pracownicy Administratora, obsługa księgowa, obsługa informatyczna obsługa pocztowo – kurierska oraz wszelcy inni pracownicy
                i współpracownicy Administratora w tym powołani w ramach zastępstwa procesowego.
                4.	Z uwagi na fakt, że komunikacja pomiędzy Administratorem a osobą, której dane osobowe dotyczą może odbywać się w formie elektronicznej, m.in. poprzez systemy poczty elektronicznej, portale społecznościowe, komunikatory, wszelkie aplikacje mobilne i komputerowe, w tym aplikacje do wykonywania połączeń głosowych lub video za pomocą internetu, etc., a Administrator nie ma wiedzy co do umiejscowienia serwerów podmiotów dostarczających te usługi, to w konsekwencji Administrator niniejszym informuje o zamiarze przekazania tych danych osobowych do państwa trzeciego w sytuacji, gdyby serwer tych dostawców znajdował się poza terytorium Unii Europejskiej. Administrator informuje także, że takie przekazanie we wskazanych powyżej wypadkach jest niezbędne do prawidłowego wykonania umowy. W związku z powyższym poprzez zawarcie umowy z Administratorem bądź wyrażenie zgody na przetwarzanie danych w trybie art. 6 ust. 1 lit. a Rozporządzenia, w razie jakichkolwiek wątpliwości przyjmuje się, że osoba której dane dotyczą upubliczniła swoje dane w zakresie komunikacji elektronicznej z Administratorem.
                5.	Administrator będzie przechowywał dane przez okres niezbędny dla prawidłowego wykonania umowy lub usługi konsultacji prawnej tj. do chwili zakończenia prowadzenia  sprawy bądź też wygaśnięcia roszczeń związanych z wykonywaniem zobowiązań umownych, a następnie do upływu przedawnienia roszczeń związanych z umową z klientem. Administrator będzie przechowywał dane przekazane na podstawie art. 6 ust. 1 lit. b i f RODO. Administrator będzie przechowywał dane przekazane na podstawie art. 6 ust. 1 lit. a RODO do cofnięcia zgody na ich przetwarzanie
                6.	W zakresie przetwarzania danych macie Państwo prawo:
                a)	żądania od Administratora dostępu do swoich danych osobowych, prawo do ich sprostowania i uzupełnienia, prawo do ich aktualizowania, prawo ich usunięcia lub ograniczenia przetwarzania danych oraz do złożenia sprzeciwu wobec przetwarzania danych oraz ich przenoszenia.
                b)	w zakresie danych przetwarzanych na podstawie art. 6 ust. 1 lit. a RODO cofnięcie zgody na przetwarzanie danych osobowych pozostaje bez wpływu na zgodność z prawem przetwarzania tych danych przed jej cofnięciem.
                c)	w zakresie danych przetwarzanych na podstawie art. 6 ust. 1 lit. f RODO tj. w przypadkach kiedy Administrator przetwarza dane na podstawie prawnie uzasadnionego interesu, prawo żądania sprostowania, usunięcia, ograniczenia przetwarzania lub wykonania prawa do wniesienia sprzeciwu (art. 21 RODO) oraz prawo do przeniesienia danych może być wykonane poprzez zgłoszenie Administratorowi adres na adres: Aleja Solidarności 155 lok. 3, 00-877 Warszawa
                7.	Za naruszenie zasad ochrony danych osobowych przysługuje prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych.
                8.	Podanie danych osobowych jest wymogiem umownym lub warunkiem zawarcia umowy.

                <br><br><br>

                Serwis (Witryna Internetowa) nie zbiera w sposób automatyczny żadnych informacji, z wyjątkiem informacji zawartych w plikach cookies.
                <br>
                Pliki cookies (tzw. „ciasteczka”) stanowią dane informatyczne, w szczególności pliki tekstowe, które przechowywane są w urządzeniu końcowym Użytkownika Serwisu i przeznaczone są do korzystania ze stron internetowych Serwisu. Cookies zazwyczaj zawierają nazwę strony internetowej, z której pochodzą, czas przechowywania ich na urządzeniu końcowym oraz unikalny numer.
                <br>
                Podmiotem zamieszczającym na urządzeniu końcowym Użytkownika Serwisu pliki cookies oraz uzyskującym do nich dostęp jest operator Serwisu bcadwokaci.pl.
                <br>
                Pliki cookies wykorzystywane są w celu: <br>
                dostosowania zawartości stron internetowych Serwisu do preferencji Użytkownika oraz optymalizacji korzystania ze stron internetowych; w szczególności pliki te pozwalają rozpoznać urządzenie Użytkownika Serwisu i odpowiednio wyświetlić stronę internetową, dostosowaną do jego indywidualnych potrzeb;
                tworzenia statystyk, które pomagają zrozumieć, w jaki sposób Użytkownicy Serwisu korzystają ze stron internetowych, co umożliwia ulepszanie ich struktury i zawartości;
                W ramach Serwisu stosowane są dwa zasadnicze rodzaje plików cookies: „sesyjne” (session cookies) oraz „stałe” (persistent cookies). Cookies „sesyjne” są plikami tymczasowymi, które przechowywane są w urządzeniu końcowym Użytkownika do czasu wylogowania, opuszczenia strony internetowej lub wyłączenia oprogramowania (przeglądarki internetowej). „Stałe” pliki cookies przechowywane są w urządzeniu końcowym Użytkownika przez czas określony w parametrach plików cookies lub do czasu ich usunięcia przez Użytkownika.
                <br>
                W ramach Serwisu stosowane są następujące rodzaje plików cookies:
                <br>
                „niezbędne” pliki cookies, umożliwiające korzystanie z usług dostępnych w ramach Serwisu, np. uwierzytelniające pliki cookies wykorzystywane do usług wymagających uwierzytelniania w ramach Serwisu;<br>
                pliki cookies służące do zapewnienia bezpieczeństwa, np. wykorzystywane do wykrywania nadużyć w zakresie uwierzytelniania w ramach Serwisu;
                „wydajnościowe” pliki cookies, umożliwiające zbieranie informacji o sposobie korzystania ze stron internetowych Serwisu;<br>
                „funkcjonalne” pliki cookies, umożliwiające „zapamiętanie” wybranych przez Użytkownika ustawień i personalizację interfejsu Użytkownika, np. w zakresie wybranego języka lub regionu, z którego pochodzi Użytkownik, rozmiaru czcionki, wyglądu strony internetowej itp.;<br>
                W plikach cookies nie są przechowywane dane osobowe. <br>
                W wielu przypadkach oprogramowanie służące do przeglądania stron internetowych (przeglądarka internetowa) domyślnie dopuszcza przechowywanie plików cookies w urządzeniu końcowym Użytkownika. Użytkownicy Serwisu mogą dokonać w każdym czasie zmiany ustawień dotyczących plików cookies. Ustawienia te mogą zostać zmienione w szczególności w taki sposób, aby blokować automatyczną obsługę plików cookies w ustawieniach przeglądarki internetowej bądź informować o ich każdorazowym zamieszczeniu w urządzeniu Użytkownika Serwisu. Szczegółowe informacje o możliwości i sposobach obsługi plików cookies dostępne są w ustawieniach oprogramowania (przeglądarki internetowej). <br>
                Operator Serwisu informuje, że ograniczenia stosowania plików cookies mogą wpłynąć na niektóre funkcjonalności dostępne na stronach internetowych Serwisu lub nawet spowodować niemożliwość korzystania z Serwisu.
                <br>
                Pliki cookies zamieszczane w urządzeniu końcowym Użytkownika Serwisu i wykorzystywane mogą być również przez współpracujących z operatorem Serwisu reklamodawców oraz partnerów.
                <br>
                Więcej informacji na temat plików cookies dostępnych jest pod adresem www.wszystkoociasteczkach.pl lub w sekcji „Pomoc” w menu przeglądarki internetowej.
                </p>
            </div>`

        if (!cookieWindow) {
            const cookieWindow = document.createElement('div');
            cookieWindow.classList.add('cookieWindow');

            setTimeout(() => { cookieWindow.classList.add('showAfter') }, 100)

            const cookieWindowClose = document.createElement('div');
            cookieWindowClose.classList.add('cookieWindowClose');

            const cookieWindowShadow = document.createElement('div');
            cookieWindowShadow.classList.add('cookieWindowShadow');

            cookieWindow.innerHTML = cookieText;
            cookieWindow.appendChild(cookieWindowClose);
            document.body.appendChild(cookieWindow);
            document.body.appendChild(cookieWindowShadow);
        }
    }

    function closeWindow(e){
        const cookieWindow = document.querySelector('.cookieWindow');
        const cookieWindowShadow = document.querySelector('.cookieWindowShadow');
        if (cookieWindow && e.target.classList.contains('cookieWindowClose') || e.target.classList.contains('cookieWindowShadow')) {
            cookieWindow.remove();
            cookieWindowShadow.remove();
            document.removeEventListener('click', this.closeWindow)
        }
    }

    if (accept.addEventListener) {
        accept.addEventListener('click', clickHandler);
    } else {
        accept.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    container.appendChild(accept);
    document.body.appendChild(container);

    link.addEventListener('click', (e) => {
        console.log('clicked');
        createWindow();
        document.addEventListener('click', closeWindow)
      })

    return true;
};