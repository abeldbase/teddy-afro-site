import React, { useEffect, useMemo, useState } from "react";

export default function TeddyAfroEtorikaSite() {
  const languages = {
    am: {
      name: "አማርኛ",
      dir: "ltr",
      nav: {
        story: "የአልበም ታሪክ",
        songs: "ዘፈኖች",
        rankings: "የአገር ደረጃ",
        gallery: "ፎቶ ማዕከል",
        fans: "የአድናቂዎች አስተያየት",
      },
      heroBadge: "አዲስ አልበም",
      title: "ኢቶሪካ",
      subtitle:
        "ስለ ቴዲ አፍሮ አዲሱ አልበም የተዘጋጀ ባለብዙ ቋንቋ የአድናቂዎች ድረ ገጽ።",
      ctaPrimary: "ዘፈኖችን ይመልከቱ",
      ctaSecondary: "ወደ YouTube ይሂዱ",
      overviewTitle: "አልበሙ ስለምንድን ነው?",
      overviewText:
        "ይህ ገጽ ኢቶሪካን በአማርኛ፣ ኦሮምኛ፣ ትግርኛ፣ ሶማሊኛ፣ አፋርኛ እና ኑዌር ለማቅረብ ተሰርቷል። የመልዕክቱ መሃል ሙዚቃ፣ ባህል፣ ፍቅር፣ መንፈሳዊነት እና ኢትዮጵያዊ መንነት ናቸው።",
      storyTitle: "የአልበሙ ታሪክ",
      storyText:
        "ኢቶሪካ በሙዚቃ ብቻ የማይቆም ስራ ሆኖ ይታያል። ይህ የአድናቂዎች ገጽ አልበሙን እንደ ባህላዊ ድምጽ፣ እንደ መንፈሳዊ ጉዞ እና እንደ ኢትዮጵያ ብርሃን ለማቅረብ ተዘጋጅቷል።",
      themeTitle: "ዋና ጭብጦች",
      themes: ["ሙዚቃ እና ባህል", "ፍቅር እና ሕዝባዊ ትውስታ", "መንፈሳዊነት", "ኢትዮጵያዊ መንነት"],
      statTitle: "ፈጣን እይታ",
      stats: ["ባለ 6 ቋንቋ ገጽ", "የኦንላይን ፎቶ ማዕከል", "የYouTube አገናኞች", "የአገር ደረጃ ክፍል"],
      songsTitle: "የአልበሙ አድናቂ ምርጫ",
      rankingsTitle: "በአገር የታዩ ከፍተኛ ደረጃዎች",
      country: "አገር",
      song: "ዘፈን",
      peak: "ከፍተኛ ደረጃ",
      notes: "ማስታወሻ",
      galleryTitle: "የፎቶ ማዕከል",
      fansTitle: "የአድናቂዎች አስተያየቶች",
      listen: "ይመልከቱ",
      langLabel: "ቋንቋ",
      footer: "ለአድናቂዎች የተሰራ የሙከራ ድረ ገጽ",
    },
    om: {
      name: "Afaan Oromoo",
      dir: "ltr",
      nav: {
        story: "Seenaa albamii",
        songs: "Sirboota",
        rankings: "Sadarkaa biyyoota",
        gallery: "Kuusaa suuraa",
        fans: "Yaada deeggartootaa",
      },
      heroBadge: "Albeemii Haaraa",
      title: "Etorika",
      subtitle:
        "Fuula deeggertootaa afaanota hedduun qophaa'e waa'ee albeemii haaraa Teddy Afro.",
      ctaPrimary: "Sirboota ilaali",
      ctaSecondary: "Gara YouTube deemi",
      overviewTitle: "Albeemiin kun maal ibsa?",
      overviewText:
        "Fuulni kun Etorika afaan jahaan akka dhiyaatu taasifameera. Ergaan isaa muuziqaa, aadaa, jaalala, amantii fi eenyummaa Itoophiyaa calaqqisiisa.",
      storyTitle: "Seenaa albamii",
      storyText:
        "Etorika hojii muuziqaa qofa osoo hin taane, yaada fi eenyummaa guddaa ibsu fakkaata. Fuulni kun albamicha akka sagalee aadaa fi imala keessaatti dhiheessa.",
      themeTitle: "Mata dureewwan ijoo",
      themes: ["Muuziqaa fi aadaa", "Jaalala fi yaadannoo uummataa", "Ruuxaanummaa", "Eenyummaa Itoophiyaa"],
      statTitle: "Ilaalcha saffisaa",
      stats: ["Fuula afaan 6", "Suuraawwan onlaayinii", "Liinkii YouTube", "Kutaa sadarkaa biyyootaa"],
      songsTitle: "Filannoo deeggertootaa",
      rankingsTitle: "Sadarkaa biyyootaa keessatti mul'atan",
      country: "Biyya",
      song: "Sirba",
      peak: "Sadarkaa olaanaa",
      notes: "Yaadannoo",
      galleryTitle: "Kuusaa suuraa",
      fansTitle: "Yaada deeggertootaa",
      listen: "Ilaali",
      langLabel: "Afaan",
      footer: "Fuula yaalii deeggertootaaf hojjetame",
    },
    ti: {
      name: "ትግርኛ",
      dir: "ltr",
      nav: {
        story: "ታሪኽ ኣልበም",
        songs: "ደርፍታት",
        rankings: "ደረጃ ሃገራት",
        gallery: "ማእከል ስእሊ",
        fans: "ርእይቶ ኣድናቒት",
      },
      heroBadge: "ሓድሽ ኣልበም",
      title: "ኢቶሪካ",
      subtitle:
        "ብብዙሕ ቋንቋታት ዝተዳለወ ገጽ ንሓድሽ ኣልበም ተዲ ኣፍሮ።",
      ctaPrimary: "ደርፍታት ርአ",
      ctaSecondary: "ናብ YouTube ኪድ",
      overviewTitle: "እዚ ኣልበም እንታይ ይብል?",
      overviewText:
        "እዚ ገጽ ኢቶሪካ ብኣማርኛ፣ ኦሮምኛ፣ ትግርኛ፣ ሶማሊኛ፣ ኣፋርኛን ኑዌርን ንምቕራብ ተሰሪሑ። ማእከሉ ሙዚቃ፣ ባህሊ፣ ፍቕሪ፣ መንፈሳዊነትን ኢትዮጵያዊ መንነትን እዩ።",
      storyTitle: "ታሪኽ ኣልበም",
      storyText:
        "ኢቶሪካ ከም ሙዚቃዊ ስራሕ ጥራይ ዘይኮነ ከም መልእኽቲ እውን ይቕረብ። እዚ ገጽ ነቲ ኣልበም ከም ባህላዊ ድምጺን መንፈሳዊ ጉዕዞን ይርእዮ።",
      themeTitle: "ቀንዲ ጭብጥታት",
      themes: ["ሙዚቃን ባህልን", "ፍቕርን ህዝባዊ ትዝታን", "መንፈሳዊነት", "ኢትዮጵያዊ መንነት"],
      statTitle: "ቅልጡፍ ሓበሬታ",
      stats: ["6 ቋንቋታት", "ኦንላይን ስእልታት", "ሊንክታት YouTube", "ክፍሊ ደረጃ ሃገራት"],
      songsTitle: "ምርጫ ኣድናቒት",
      rankingsTitle: "ኣብ ሃገራት ዝተርኣዩ ደረጃታት",
      country: "ሃገር",
      song: "ደርፊ",
      peak: "ዝለዓለ ደረጃ",
      notes: "መብርሂ",
      galleryTitle: "ማእከል ስእሊ",
      fansTitle: "ርእይቶ ኣድናቒት",
      listen: "ርአ",
      langLabel: "ቋንቋ",
      footer: "ናይ ፈተና ድረ ገጽ ንኣድናቒት",
    },
    so: {
      name: "Soomaali",
      dir: "ltr",
      nav: {
        story: "Sheekada albumka",
        songs: "Heesaha",
        rankings: "Kala sarreynta dalalka",
        gallery: "Sawirrada",
        fans: "Fikradaha taageerayaasha",
      },
      heroBadge: "Album Cusub",
      title: "Etorika",
      subtitle:
        "Bog taageerayaal oo luqado badan leh oo ku saabsan albumka cusub ee Teddy Afro.",
      ctaPrimary: "Daawo heesaha",
      ctaSecondary: "Tag YouTube",
      overviewTitle: "Albumkan muxuu xanbaarsan yahay?",
      overviewText:
        "Boggan waxaa loo dhisay in Etorika lagu soo bandhigo lix luqadood. Fariintiisu waxay ku wareegsan tahay muusig, dhaqan, jacayl, ruuxaani iyo aqoonsiga Itoobiya.",
      storyTitle: "Sheekada albumka",
      storyText:
        "Etorika waxa loo arki karaa shaqo ka badan muusig keliya. Boggan waxa uu albumka u soo bandhigayaa sidii cod dhaqan iyo safar ruuxaani ah.",
      themeTitle: "Mowduucyada waaweyn",
      themes: ["Muusig iyo dhaqan", "Jacayl iyo xusuus dadweyne", "Ruuxaani", "Aqoonsiga Itoobiya"],
      statTitle: "Aragti degdeg ah",
      stats: ["Bog 6 luqadood leh", "Sawirro online ah", "Xiriirro YouTube", "Qaybta kala sarreynta dalalka"],
      songsTitle: "Xulashada taageerayaasha",
      rankingsTitle: "Heerarka lagu arkay dalalka",
      country: "Dal",
      song: "Hees",
      peak: "Heerka ugu sarreeya",
      notes: "Faallo",
      galleryTitle: "Sawirrada",
      fansTitle: "Fikradaha taageerayaasha",
      listen: "Daawo",
      langLabel: "Luqad",
      footer: "Bog tijaabo ah oo loogu talagalay taageerayaasha",
    },
    aa: {
      name: "Qafaraf",
      dir: "ltr",
      nav: {
        story: "Albam seena",
        songs: "Sirbo",
        rankings: "Biyya daraja",
        gallery: "Sawira",
        fans: "Fan fikra",
      },
      heroBadge: "Qusba Albam",
      title: "Etorika",
      subtitle:
        "Teddy Afro qusba albamih baxxaqqa shan afat yan marih fan website.",
      ctaPrimary: "Sirbo luk",
      ctaSecondary: "YouTube fan gex",
      overviewTitle: "Albam maxco takkeh?",
      overviewText:
        "Tama page Etorika Amharic, Afaan Oromoo, Tigrinya, Somali, Qafaraf kee Nuer kinnim fan qembise. Fariisiyyi muusik, aada, jacayl, ruuxaaniyya kee Itoobiya kinnim yan gexxa.",
      storyTitle: "Albam seena",
      storyText:
        "Etorika muusik qiddo qofa hinna. Tama page albam aada codii kee ruuxaani safar akkaleh takke wayta baxsa.",
      themeTitle: "Qunxa mawduuc",
      themes: ["Muusik kee aada", "Jacayl kee xusoo", "Ruuxaaniyya", "Itoophiyaa eenummâ"],
      statTitle: "Qusba malak",
      stats: ["6 af page", "Online sawira", "YouTube links", "Biyya daraja qaybta"],
      songsTitle: "Fan dooritah",
      rankingsTitle: "Biyyol addat yali daraja",
      country: "Biyya",
      song: "Sirba",
      peak: "Qunxa daraja",
      notes: "Malah",
      galleryTitle: "Sawira",
      fansTitle: "Fan fikra",
      listen: "Luk",
      langLabel: "Afa",
      footer: "Fanootah fan takkeh tijaabo website",
    },
    nu: {
      name: "Nuär",
      dir: "ltr",
      nav: {
        story: "Albäm ruac",
        songs: "Diit",
        rankings: "Wi̱i̱c rankiŋni̱",
        gallery: "Galli̱ri̱",
        fans: "Ruac tin nhɔakɛ",
      },
      heroBadge: "Albäm mi̱ Ji̱di̱t",
      title: "Ɛtörika",
      subtitle:
        "Ɛn nɛy tin laa guɛckɛ thuk ti̱ ŋuan kɛ kui̱i̱ albämä Teddy Afro in pay bën.",
      ctaPrimary: "Guɛc diitni̱",
      ctaSecondary: "Wër kä Yutub",
      overviewTitle: "Ɛŋu mi̱ lot rɔ kɛ albäm ɛmɛ?",
      overviewText:
        "Pec ɛmɛ nyothɛ Etorika kɛ thuk ti ŋuan, amäni Nuer. Nyuɔthɛ buɔ̱l, ciɛŋ, nhök, yiëë, kɛnɛ ciɛŋ ji̱ Ethiopia.",
      storyTitle: "Albäm ruac",
      storyText:
        "Etorika laa jɛ laa guicɛ i̱ di̱tdɛ ɛlɔ̱ŋ mi̱ leny ni̱ buɔ̱l kärɔa. Ɛn wargak ɛmɛ nyoothɛ ni̱ albäm ɛ la ka̱lcɛr, ruac, kɛnɛ ja̱l yieekä.",
      themeTitle: "Ci̱öt tin di̱t",
      themes: ["Muthik kɛnɛ ka̱lciɛr", "Nhök kɛnɛ ti̱m ŋɔaani̱", "Yiëë", "Ŋäc ji̱ I̱thi̱öpia"],
      statTitle: "Guäc mi̱ pɛ̈th",
      stats: ["Pec thuɔkni̱ da̱ŋ 6", "Gua̱a̱th thurɛni̱ tin te rɛy intɛrnɛtdä", "Linkni̱ Youtube", "Gua̱a̱th in ca la̱th thi̱n rɛy wec"],
      songsTitle: "Pan pi̱kni̱",
      rankingsTitle: "Wi̱i̱c tin te nhial",
      country: "Weec",
      song: "Diit",
      peak: "Pi̱i̱k rank",
      notes: "Notes",
      galleryTitle: "Galli̱ri̱",
      fansTitle: "Ruacni̱ ji̱ nhɔakɛ",
      listen: "Guɛc",
      langLabel: "Thok",
      footer: "Pan-made thëm wɛbthaay",
    },
  };

  const tracks = useMemo(
    () => [
      {
        title: "ዳስ ጣል (አንሳው)",
        subtitle: "Das Tal (Ansaw) · Track 1",
        image: "https://img.youtube.com/vi/ADc9JPeLYi4/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=ADc9JPeLYi4",
      },
      {
        title: "ኢቶሪካ",
        subtitle: "Etorika · Track 2",
        image: "https://img.youtube.com/vi/oEIySELAmqU/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=oEIySELAmqU",
      },
      {
        title: "ስምምነን (ጉሬጌ)",
        subtitle: "Sememene · Track 5",
        image: "https://img.youtube.com/vi/nw443G62EQc/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=nw443G62EQc",
      },
      {
        title: "ጽዮን ሙሽራዬ",
        subtitle: "Tsion Mushraye · Track 6",
        image: "https://img.youtube.com/vi/IYf-RLJNMGU/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=IYf-RLJNMGU",
      },
      {
        title: "መሬማ",
        subtitle: "Merema · Track 15",
        image: "https://img.youtube.com/vi/jaBZ9xXM2gU/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=jaBZ9xXM2gU",
      },
      {
        title: "ጀምበር",
        subtitle: "Jember · Track 18",
        image: "https://img.youtube.com/vi/PA2aWF37Ljk/maxresdefault.jpg",
        link: "https://www.youtube.com/watch?v=PA2aWF37Ljk",
      },
    ],
    []
  );

  const defaultRankingRows = [
    ["UAE", "ዳስ ጣል (አንሳው)", "#1", "Peak chart position"],
    ["Saudi Arabia", "ዳስ ጣል (አንሳው)", "#1", "Peak chart position"],
    ["Lebanon", "መሬማ", "#2", "Strong regional peak"],
    ["Canada", "ስምምነን", "#5", "Verified charting"],
    ["Australia", "ዳስ ጣል (አንሳው)", "#7", "High trending position"],
    ["United Kingdom", "ስምምነን", "#7", "Strong cross-market visibility"],
    ["United States", "ስምምነን", "#13", "Verified charting"],
    ["Germany", "መሬማ / ስምምነን", "#18", "Shared visibility"],
    ["Jordan", "ጀምበር", "#22", "Verified charting"],
    ["Finland", "ጀምበር", "#28", "Verified charting"],
  ];

  const gallery = [
    "https://img.youtube.com/vi/ADc9JPeLYi4/maxresdefault.jpg",
    "https://img.youtube.com/vi/oEIySELAmqU/maxresdefault.jpg",
    "https://img.youtube.com/vi/nw443G62EQc/maxresdefault.jpg",
    "https://img.youtube.com/vi/IYf-RLJNMGU/maxresdefault.jpg",
    "https://img.youtube.com/vi/jaBZ9xXM2gU/maxresdefault.jpg",
    "https://img.youtube.com/vi/PA2aWF37Ljk/maxresdefault.jpg",
  ];

  const fanComments = {
    am: [
      "ይህ አልበም የሙዚቃ ብቻ ሳይሆን የመንፈስ ጉዞ ነው።",
      "በቃል፣ በዜማ እና በምስል ኢትዮጵያን ያሳያል።",
      "አልበሙ በብዙ ቋንቋ መቅረቡ በጣም ውብ ነው።",
    ],
    om: [
      "Albeemiin kun imala ruuxaanii fi aadaa fakkaata.",
      "Jechoota, sagalee fi fakkii keessatti Itoophiyaa mul'isa.",
      "Afaan hedduun dhiyaachuun isaa baay'ee bareedaadha.",
    ],
    ti: [
      "እዚ ኣልበም ናይ መንፈሳዊ ጉዕዞ ስራሕ ይመስል።",
      "ብቓላትን ዜማን ስእልን ኢትዮጵያ ይብርህ።",
      "ብብዙሕ ቋንቋታት ምቕራቡ ውቁብ እዩ።",
    ],
    so: [
      "Albumkani wuxuu u egyahay safar ruuxaani ah.",
      "Wuxuu Itoobiya ku muujinayaa eray, laxan iyo sawir.",
      "Inuu ku yimaado luqado badan waa arrin qurux badan.",
    ],
    aa: [
      "Tama albam ruuxaani safar akkaleh yaanam.",
      "Qafar, cod kee sawir fan Itoobiya baxsa.",
      "Shan afat qembisamuk baaxo cakkik.",
    ],
    nu: [
      "Albäm ɛmɛ jɛ laa jɛ buɔ̱l kuɔth kɛrɛc.",
      "Ɛn cɛ yiëë, ciɛŋ, kɛnɛ ti̱m ŋɔaani̱.",
      "Thok Nuer kɛɛrɛ laa pany luɔi̱.",
    ],
  };

  const [lang, setLang] = useState("am");
  const [rankingRows, setRankingRows] = useState(defaultRankingRows);
  const t = languages[lang] || languages.am;
  const commentsForLanguage = fanComments[lang] || fanComments.am;

  useEffect(() => {
    const basePath = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
    const rankingUrl = `${basePath}/rankings.json`;

    const loadRankings = async () => {
      try {
        const response = await fetch(rankingUrl, { cache: "no-store" });
        if (!response.ok) return;
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setRankingRows(data);
        }
      } catch (error) {
        console.log("Using default ranking data.");
      }
    };

    loadRankings();
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0a0a0a",
        color: "#fff",
        fontFamily: "Arial, sans-serif",
      }}
      dir={t.dir}
    >
      <div style={{ position: "relative", overflow: "hidden" }}>
        <img
          src="https://img.youtube.com/vi/ADc9JPeLYi4/maxresdefault.jpg"
          alt="Teddy Afro album visual"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "left center",
            opacity: 0.7,
            filter: "contrast(1.08) brightness(0.96)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.12) 0%, rgba(0,0,0,0.18) 24%, rgba(0,0,0,0.32) 50%, rgba(0,0,0,0.56) 100%), linear-gradient(to bottom, rgba(0,0,0,0.06), rgba(0,0,0,0.18), rgba(0,0,0,0.78))",
          }}
        />

        <header
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "24px 16px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "space-between",
              gap: "16px",
              padding: "18px",
              borderRadius: "24px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                  letterSpacing: "0.3em",
                  color: "#f4c542",
                  textTransform: "uppercase",
                }}
              >
                Teddy Afro
              </p>
              <h1 style={{ margin: "10px 0 0", fontSize: "32px" }}>{t.title}</h1>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "12px",
                  fontSize: "14px",
                  color: "rgba(255,255,255,0.8)",
                }}
              >
                <a href="#story" style={{ color: "inherit", textDecoration: "none" }}>
                  {t.nav.story}
                </a>
                <a href="#songs" style={{ color: "inherit", textDecoration: "none" }}>
                  {t.nav.songs}
                </a>
                <a href="#rankings" style={{ color: "inherit", textDecoration: "none" }}>
                  {t.nav.rankings}
                </a>
                <a href="#gallery" style={{ color: "inherit", textDecoration: "none" }}>
                  {t.nav.gallery}
                </a>
                <a href="#fans" style={{ color: "inherit", textDecoration: "none" }}>
                  {t.nav.fans}
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <label style={{ fontSize: "14px" }}>{t.langLabel}</label>
                <select
                  value={lang}
                  onChange={(e) => setLang(e.target.value)}
                  style={{
                    padding: "10px 14px",
                    borderRadius: "16px",
                    background: "rgba(0,0,0,0.45)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  {Object.entries(languages).map(([key, value]) => (
                    <option key={key} value={key} style={{ color: "#000" }}>
                      {value.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </header>

        <section
          style={{
            position: "relative",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "20px 16px 80px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "28px",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <span
              style={{
                display: "inline-flex",
                width: "fit-content",
                padding: "8px 14px",
                borderRadius: "999px",
                background: "#f4c542",
                color: "#000",
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
              }}
            >
              {t.heroBadge}
            </span>

            <h2 style={{ margin: "18px 0 0", fontSize: "56px", lineHeight: 1.05 }}>
              {t.title}
            </h2>

            <p
              style={{
                marginTop: "12px",
                fontSize: "28px",
                fontWeight: "700",
                color: "#f4c542",
                maxWidth: "700px",
              }}
            >
              የማዳም ቅመሞች አንደኛ !
            </p>

            <p
              style={{
                marginTop: "18px",
                fontSize: "18px",
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.82)",
                maxWidth: "700px",
              }}
            >
              {t.subtitle}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", marginTop: "26px" }}>
              <a
                href="#songs"
                style={{
                  background: "#f4c542",
                  color: "#000",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: "16px",
                  fontWeight: 700,
                }}
              >
                {t.ctaPrimary}
              </a>
              <a
                href="https://www.youtube.com/channel/UCydlocDyvRtFmMffKytKqgQ"
                target="_blank"
                rel="noreferrer"
                style={{
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "14px 18px",
                  borderRadius: "16px",
                  fontWeight: 700,
                  border: "1px solid rgba(255,255,255,0.18)",
                }}
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "16px",
            }}
          >
            {tracks.slice(0, 4).map((track) => (
              <a
                key={track.title}
                href={track.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  overflow: "hidden",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                  textDecoration: "none",
                  color: "#fff",
                }}
              >
                <img
                  src={track.image}
                  alt={track.title}
                  style={{ width: "100%", height: "170px", objectFit: "cover" }}
                />
                <div style={{ padding: "14px" }}>
                  <h3 style={{ margin: 0, fontSize: "18px" }}>{track.title}</h3>
                  <p
                    style={{
                      margin: "6px 0 0",
                      fontSize: "13px",
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {track.subtitle}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>

      <main style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 16px 80px" }}>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
          }}
        >
          <div
            style={{
              padding: "28px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "30px" }}>{t.overviewTitle}</h3>
            <p style={{ marginTop: "16px", lineHeight: 1.9, color: "rgba(255,255,255,0.82)" }}>
              {t.overviewText}
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "linear-gradient(135deg, rgba(244,197,66,0.16), rgba(239,68,68,0.10))",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "30px" }}>{t.statTitle}</h3>
            <div style={{ display: "grid", gap: "12px", marginTop: "18px" }}>
              {t.stats.map((item) => (
                <div
                  key={item}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "18px",
                    background: "rgba(0,0,0,0.22)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="story"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "32px",
          }}
        >
          <div
            style={{
              padding: "28px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "34px" }}>{t.nav.story}</h3>
            <p style={{ marginTop: "16px", lineHeight: 1.9, color: "rgba(255,255,255,0.82)" }}>
              {t.storyText}
            </p>
          </div>

          <div
            style={{
              padding: "28px",
              borderRadius: "28px",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.05)",
            }}
          >
            <h3 style={{ margin: 0, fontSize: "28px" }}>{t.themeTitle}</h3>
            <div style={{ display: "grid", gap: "10px", marginTop: "18px" }}>
              {t.themes.map((theme) => (
                <div
                  key={theme}
                  style={{
                    padding: "14px 16px",
                    borderRadius: "18px",
                    background: "rgba(0,0,0,0.22)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {theme}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="songs" style={{ marginTop: "42px" }}>
          <h3 style={{ margin: 0, fontSize: "34px" }}>{t.songsTitle}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
              marginTop: "22px",
            }}
          >
            {tracks.map((track, index) => (
              <article
                key={track.title}
                style={{
                  overflow: "hidden",
                  borderRadius: "28px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src={track.image}
                  alt={track.title}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
                <div style={{ padding: "18px" }}>
                  <div
                    style={{
                      display: "inline-flex",
                      padding: "6px 10px",
                      borderRadius: "999px",
                      background: "rgba(255,255,255,0.10)",
                      fontSize: "12px",
                      color: "rgba(255,255,255,0.84)",
                    }}
                  >
                    0{index + 1}
                  </div>
                  <h4 style={{ margin: "12px 0 0", fontSize: "22px" }}>{track.title}</h4>
                  <p
                    style={{
                      marginTop: "8px",
                      fontSize: "14px",
                      color: "rgba(255,255,255,0.72)",
                    }}
                  >
                    {track.subtitle}
                  </p>
                  <a
                    href={track.link}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: "inline-block",
                      marginTop: "16px",
                      padding: "12px 16px",
                      borderRadius: "16px",
                      background: "#f4c542",
                      color: "#000",
                      textDecoration: "none",
                      fontWeight: 700,
                    }}
                  >
                    {t.listen}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="rankings"
          style={{
            marginTop: "42px",
            padding: "28px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "rgba(255,255,255,0.05)",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "34px" }}>{t.rankingsTitle}</h3>

          <div
            style={{
              marginTop: "20px",
              overflowX: "auto",
              borderRadius: "22px",
              border: "1px solid rgba(255,255,255,0.10)",
            }}
          >
            <table style={{ width: "100%", borderCollapse: "collapse", minWidth: "700px" }}>
              <thead style={{ background: "rgba(255,255,255,0.10)" }}>
                <tr>
                  <th style={thStyle}>{t.country}</th>
                  <th style={thStyle}>{t.song}</th>
                  <th style={thStyle}>{t.peak}</th>
                  <th style={thStyle}>{t.notes}</th>
                </tr>
              </thead>
              <tbody>
                {rankingRows.map((row, idx) => (
                  <tr key={idx}>
                    <td style={tdStyle}>{row[0]}</td>
                    <td style={tdStyle}>{row[1]}</td>
                    <td style={tdStyle}>{row[2]}</td>
                    <td style={tdStyle}>{row[3]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section id="gallery" style={{ marginTop: "42px" }}>
          <h3 style={{ margin: 0, fontSize: "34px" }}>{t.galleryTitle}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            {gallery.map((src, index) => (
              <div
                key={src + index}
                style={{
                  overflow: "hidden",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.05)",
                }}
              >
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  style={{ width: "100%", height: "220px", objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </section>

        <section
          id="fans"
          style={{
            marginTop: "42px",
            padding: "28px",
            borderRadius: "28px",
            border: "1px solid rgba(255,255,255,0.12)",
            background: "linear-gradient(135deg, rgba(239,68,68,0.10), rgba(244,197,66,0.10))",
          }}
        >
          <h3 style={{ margin: 0, fontSize: "34px" }}>{t.fansTitle}</h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px",
              marginTop: "20px",
            }}
          >
            {commentsForLanguage.map((comment, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderRadius: "22px",
                  background: "rgba(0,0,0,0.22)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div style={{ marginBottom: "10px", fontSize: "20px" }}>❤️💚💛</div>
                <p style={{ margin: 0, lineHeight: 1.8, color: "rgba(255,255,255,0.85)" }}>
                  {comment}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer style={{ borderTop: "1px solid rgba(255,255,255,0.10)", background: "rgba(0,0,0,0.3)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "28px 16px",
            fontSize: "14px",
            color: "rgba(255,255,255,0.60)",
          }}
        >
          <p style={{ margin: 0 }}>{t.footer}</p>
          <p style={{ margin: "10px 0 0" }}>
            Photos are loaded from public online thumbnails and the links point to Teddy Afro YouTube releases.
          </p>
          <p style={{ margin: "10px 0 0", color: "#f4c542", fontWeight: 700 }}>
            Created by Abel Sharon
          </p>
        </div>
      </footer>
    </div>
  );
}

const thStyle = {
  textAlign: "left",
  padding: "14px 16px",
  fontSize: "14px",
  borderBottom: "1px solid rgba(255,255,255,0.10)",
};

const tdStyle = {
  padding: "14px 16px",
  fontSize: "14px",
  color: "rgba(255,255,255,0.82)",
  borderBottom: "1px solid rgba(255,255,255,0.08)",
};
