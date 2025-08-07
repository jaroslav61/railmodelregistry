// components/HomePage.js
function HomePage({ onLoginClick }) {
    const images = [
        "obrazky/ChatGPT Image 17. 7. 2025, 10_30_04.png",
        "obrazky/ChatGPT Image 17. 7. 2025, 10_38_22.png",
        "obrazky/ChatGPT Image 17. 7. 2025, 22_41_54.png",
        "obrazky/ChatGPT Image 17. 7. 2025, 18_22_33.png",
        "obrazky/ChatGPT Image 17. 7. 2025, 18_47_57.png",
        "obrazky/ChatGPT Image 17. 7. 2025, 22_30_21.png",
        "obrazky/ChatGPT Image 17. 7. 2025, 22_36_55.png"
    ];

    const selectedImages = [];
    const shuffledImages = [...images].sort(() => 0.5 - Math.random());
    for (let i = 0; i < 3 && i < shuffledImages.length; i++) {
        selectedImages.push(shuffledImages[i]);
    }

    const sampleModels = [
        {
            id: 'sample-loco-1',
            modelName: 'Parná lokomotíva 475.1',
            evidencneCislo: '475.175',
            manufacturer: 'Roco',
            scale: 'H0',
            imageDataUrl: 'obrazky/475.png',
        },
        {
            id: 'sample-wagon-1',
            modelName: 'Nákladný vagón Es',
            evidencneCislo: 'Es 21 54 000 000-0',
            manufacturer: 'Tillig',
            scale: 'TT',
            imageDataUrl: 'obrazky/Es.png',
        },
        {
            id: 'sample-acc-1',
            modelName: 'Staničná budova "Praha"',
            subCategory: 'Budovy',
            manufacturer: 'Faller',
            scale: 'H0',
            imageDataUrl: 'obrazky/wils.png',
        },
    ];

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100 text-center">
            <h1 className="text-5xl font-extrabold text-blue-800 mb-6 leading-tight">
                Vitajte v RailModelRegistry!
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mb-8">
                Vaša komplexná aplikácia na správu a evidenciu vašej zbierky modelovej železnice.
                Sledujte detaily lokomotív, vagónov, príslušenstva a mnoho ďalšieho na jednom mieste.
            </p>
            <div className="collage-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {selectedImages.map((imgSrc, index) => (
                    <div key={index} className="collage-item">
                        <img
                            src={imgSrc}
                            alt={`Model železnice ${index + 1}`}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://placehold.co/250x200/cccccc/333333?text=Chyba+načítania`;
                            }}
                        />
                    </div>
                ))}
            </div>
            <div className="mt-12 p-6 bg-blue-50 rounded-xl border border-blue-200 shadow-inner">
                <h2 className="text-3xl font-bold text-blue-700 mb-4">
                    Prečo používať RailModelRegistry?
                </h2>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2 mb-8 max-w-2xl mx-auto">
                    <li>Organizujte svoju zbierku s ľahkosťou.</li>
                    <li>Zaznamenávajte detailné informácie o každom modeli.</li>
                    <li>Sledujte históriu údržby a modifikácií.</li>
                    <li>Majte prehľad o nákladoch a zárukách.</li>
                    <li>Všetky vaše dáta bezpečne uložené a dostupné odkiaľkoľvek.</li>
                </ul>
                <p className="text-xl text-gray-800 font-semibold mb-6">
                    Začnite spravovať svoju zbierku ešte dnes!
                </p>
               
            </div>
            <div className="mt-12 p-6 bg-gray-100 rounded-xl border border-gray-200 shadow-inner">
                <h2 className="text-3xl font-bold text-blue-700 mb-6">
                    Ukážka modelov
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sampleModels.map((model) => (
                        <div key={model.id} className="grid-card">
                            <img src={model.imageDataUrl} alt={model.modelName} className="grid-card-image" />
                            <h3 className="grid-card-title">{model.modelName}</h3>
                            <p className="grid-card-subtitle">{model.evidencneCislo || 'N/A'}</p>
                            <p className="grid-card-detail">Výrobca: {model.manufacturer || 'N/A'}</p>
                            <p className="grid-card-detail">Mierka: {model.scale || 'N/A'}</p>
                            {model.subCategory && <p className="grid-card-detail">Typ: {model.subCategory}</p>}
                           
                        </div>
                    ))}
                </div>
                <p className="text-gray-700 mt-6">
                    Tieto ukážkové karty vám dávajú predstavu o tom, ako môžete evidovať vaše modely.
                    Pre plný prístup k správe vašej zbierky sa prosím prihláste alebo zaregistrujte.
                </p>
            </div>
        </div>
    );
}