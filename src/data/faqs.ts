export interface FaqItem {
  question: string;
  answer: string;
}

/**
 * FAQ content per service slug. Used for both visible accordion rendering
 * and FAQPage JSON-LD structured data.
 */
export const faqs: Record<string, FaqItem[]> = {
  photovoltaik: [
    {
      question: 'Was kostet eine Photovoltaikanlage für ein Einfamilienhaus?',
      answer:
        'Die Kosten hängen stark von Größe, Dachform, Speicher und gewählten Komponenten ab. Für ein typisches Einfamilienhaus mit 8–10 kWp und Batteriespeicher liegen die Investitionskosten meist zwischen 18.000 € und 28.000 €. Wir erstellen Ihnen nach einer Vor-Ort-Analyse ein individuelles Festpreisangebot.',
    },
    {
      question: 'Wie lange dauert die Installation einer PV-Anlage?',
      answer:
        'Die reine Montage auf dem Dach dauert bei einem Einfamilienhaus in der Regel 1–2 Tage. Die elektrische Inbetriebnahme erfolgt meist am selben oder am Folgetag. Insgesamt vom ersten Termin bis zur angemeldeten und einspeisenden Anlage sollten Sie je nach Netzbetreiber mit 4–8 Wochen rechnen.',
    },
    {
      question: 'Lohnt sich ein Batteriespeicher zusätzlich zur PV-Anlage?',
      answer:
        'Mit einem Batteriespeicher steigt Ihre Eigenverbrauchsquote von rund 30 % auf bis zu 80 %. Besonders in Kombination mit einer Wallbox lohnt sich die Investition. Wir beraten Sie zur passenden Speichergröße und empfehlen Systeme von E3DC, SMA und Fronius – abgestimmt auf Ihren tatsächlichen Verbrauch.',
    },
    {
      question: 'Welche Förderungen gibt es für Photovoltaik?',
      answer:
        'Seit 2023 gilt beim Kauf einer PV-Anlage für Wohngebäude der Nullsteuersatz (0 % Umsatzsteuer). Zusätzlich gibt es regionale Programme sowie zinsgünstige KfW-Kredite. Wir beraten Sie zu den aktuellen Fördermöglichkeiten in Berlin und Brandenburg.',
    },
    {
      question: 'Können Sie die Anlage mit meiner Wallbox kombinieren?',
      answer:
        'Ja. Als Elektro-Ingenieursbetrieb planen wir Ihr Energiesystem ganzheitlich: PV, Speicher und Wallbox werden über ein Home-Energy-Management-System (HEMS) intelligent gesteuert, sodass Sie Ihren Solarstrom optimal nutzen können.',
    },
  ],

  wallbox: [
    {
      question: 'Was kostet die Installation einer Wallbox zuhause?',
      answer:
        'Die Wallbox selbst kostet je nach Modell 600–1.800 €. Die fachgerechte Installation inkl. Leitungsverlegung, Absicherung und Anmeldung beim Netzbetreiber liegt typischerweise bei 800–2.000 €. Die genauen Kosten hängen von der Entfernung zum Zählerschrank und den baulichen Gegebenheiten ab.',
    },
    {
      question: 'Brauche ich für eine Wallbox eine Genehmigung?',
      answer:
        'Wallboxen bis 11 kW sind beim Netzbetreiber meldepflichtig, aber nicht genehmigungspflichtig. Ab 12 kW ist eine Genehmigung durch den Netzbetreiber erforderlich. Wir übernehmen die komplette Anmeldung und Abstimmung mit dem Netzbetreiber für Sie.',
    },
    {
      question: 'Kann ich mein E-Auto mit Solarstrom laden?',
      answer:
        'Ja – mit PV-Überschussladen. Die Wallbox kommuniziert dabei mit Ihrem Wechselrichter und lädt das Fahrzeug bevorzugt dann, wenn Ihre PV-Anlage Überschussstrom produziert. So senken Sie Ihre Ladekosten auf nahezu 0 Cent/kWh.',
    },
    {
      question: 'Funktioniert eine Wallbox auch in einer Tiefgarage oder WEG?',
      answer:
        'Ja. Für Mehrfamilienhäuser und WEG installieren wir Lastmanagement-Systeme, die die verfügbare Hausanschlussleistung intelligent auf mehrere Ladepunkte verteilen. So können mehrere Fahrzeuge gleichzeitig laden, ohne den Hausanschluss zu überlasten.',
    },
  ],

  elektroinstallation: [
    {
      question: 'Führen Sie auch Elektroprüfungen nach DIN VDE durch?',
      answer:
        'Ja. Als zertifizierter Elektro-Ingenieursbetrieb führen wir Erstprüfungen nach DIN VDE 0100-600, Wiederholungsprüfungen nach DIN VDE 0105-100 sowie DGUV V3-Prüfungen ortsfester und ortsveränderlicher Anlagen durch. Sie erhalten ein rechtssicheres Prüfprotokoll.',
    },
    {
      question: 'Planen und installieren Sie Smart-Home-Systeme?',
      answer:
        'Ja. Wir planen, installieren und programmieren KNX-Systeme und andere Smart-Home-Lösungen – von einzelnen Komponenten bis zur vollintegrierten Gebäudesystemtechnik. Licht, Beschattung, Heizung und Sicherheitstechnik lassen sich zentral steuern.',
    },
    {
      question: 'Realisieren Sie auch strukturierte Verkabelung und Netzwerktechnik?',
      answer:
        'Ja. Wir projektieren und installieren strukturierte Gebäudeverkabelung, LAN- und WLAN-Netzwerke sowie Telekommunikationsanlagen – für Büros, Gewerbeimmobilien und anspruchsvolle Privatkunden.',
    },
    {
      question: 'Arbeiten Sie auch für Gewerbe- und Industriekunden?',
      answer:
        'Selbstverständlich. Ein Großteil unserer Projekte stammt aus dem gewerblichen und industriellen Bereich: von der Schaltanlagenplanung über Maschinenprüfungen nach DIN EN 60204-1 bis zur kompletten Elektroprojektierung für Neubauten und Sanierungen.',
    },
  ],
};

export function getFaqsForSlug(slug: string): FaqItem[] | undefined {
  return faqs[slug];
}
