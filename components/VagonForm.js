// ==================================
        // KOMPONENTY: forms/VagonForm.js
        // =================================
const VagonForm = ({ initialData = {}, showMessage, allReferenceData = {}, db, userId, appId, onCloseForm, formEditMode, setFormEditMode }) => {
    const isEditMode = formEditMode === 'edit';
    const isNewMode = formEditMode === 'new';
    const isViewMode = formEditMode === 'view';
    const [activeTab, setActiveTab] = React.useState('general');
    const [modelName, setModelName] = React.useState(initialData.modelName || '');
    const [evidencneCislo, setEvidencneCislo] = React.useState(initialData.evidencneCislo || '');
    const [typeVagonu, setTypeVagonu] = React.useState(initialData.typeVagonu || '');
    const [manufacturer, setManufacturer] = React.useState(initialData.manufacturer || '');
    const [scale, setScale] = React.useState(initialData.scale || '');
    const [epocha, setEpocha] = React.useState(initialData.epocha || '');
    const [sprava, setSprava] = React.useState(initialData.sprava || '');
    const [depo, setDepo] = React.useState(initialData.depo || '');
    const [stav, setStav] = React.useState(initialData.stav || '');
    const [datumZakupeniaModelu, setDatumZakupeniaModelu] = React.useState(initialData.datumZakupeniaModelu || '');
    const [cenaModelu, setCenaModelu] = React.useState(initialData.cenaModelu || '');
    const [obchodnikModelu, setObchodnikModelu] = React.useState(initialData.obchodnikModelu || '');
    const [zarukaModelu, setZarukaModelu] = React.useState(initialData.zarukaModelu || '');
    const [imageFile, setImageFile] = React.useState(null);
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState(initialData.imageDataUrl || '');
    const [dlzkaNarazniky, setDlzkaNarazniky] = React.useState(initialData.dlzkaNarazniky || '');
    const [hmotnost, setHmotnost] = React.useState(initialData.hmotnost || '');
    const [pocetNaprav, setPocetNaprav] = React.useState(initialData.pocetNaprav || 2);
    const [typSpriahly, setTypSpriahly] = React.useState(initialData.typSpriahly || '');
    const [typNakladu, setTypNakladu] = React.useState(initialData.typNakladu || '');
    const [farba, setFarba] = React.useState(initialData.farba || '');
    const [popis, setPopis] = React.useState(initialData.popis || '');
    const [selectedDecoderIdVagon, setSelectedDecoderIdVagon] = React.useState(initialData.selectedDecoderIdVagon || '');
    const [rozhranieDekoderVagon, setRozhranieDekoderVagon] = React.useState(initialData.rozhranieDekoderVagon || '');
    const [typDekoderVagon, setTypDekoderVagon] = React.useState(initialData.typDekoderVagon || '');
    const [vyrobcaDekoderVagon, setVyrobcaDekoderVagon] = React.useState(initialData.vyrobcaDekoderVagon || '');
    const [adresaDekoderVagon, setAdresaDekoderVagon] = React.useState(initialData.adresaDekoderVagon || '');
    const [datumZakupeniaDekoderVagon, setDatumZakupeniaDekoderVagon] = React.useState(initialData.datumZakupeniaDekoderVagon || '');
    const [cenaDekoderVagon, setCenaDekoderVagon] = React.useState(initialData.cenaDekoderVagon || '');
    const [obchodnikDekoderVagon, setObchodnikDekoderVagon] = React.useState(initialData.obchodnikDekoderVagon || '');
    const [zarukaDekoderVagon, setZarukaDekoderVagon] = React.useState(initialData.zarukaDekoderVagon || '');
    const [cvNotesVagon, setCvNotesVagon] = React.useState(initialData.cvNotesVagon || '');
    const [voltageDekoderVagon, setVoltageDekoderVagon] = React.useState(initialData.powerConsumptionVagon?.voltageDekoderVagon || '');
    const [currentDekoderVagon, setCurrentDekoderVagon] = React.useState(initialData.powerConsumptionVagon?.currentDekoderVagon || '');
    const [lastServiceDateVagon, setLastServiceDateVagon] = React.useState(initialData.serviceHistoryVagon?.lastServiceDateVagon || '');
    const [serviceDescriptionVagon, setServiceDescriptionVagon] = React.useState(initialData.serviceHistoryVagon?.serviceDescriptionVagon || '');
    const [serviceCostVagon, setServiceCostVagon] = React.useState(initialData.serviceHistoryVagon?.serviceCostVagon || '');
    const [servicedByVagon, setServicedByVagon] = React.useState(initialData.serviceHistoryVagon?.servicedByVagon || '');
    const [lastModificationDateVagon, setLastModificationDateVagon] = React.useState(initialData.modificationsVagon?.lastModificationDateVagon || '');
    const [modificationDescriptionVagon, setModificationDescriptionVagon] = React.useState(initialData.modificationsVagon?.modificationDescriptionVagon || '');
    const [modificationCostVagon, setModificationCostVagon] = React.useState(initialData.modificationsVagon?.modificationCostVagon || '');
    const [location, setLocation] = React.useState(initialData.location || '');
    const [packagingCondition, setPackagingCondition] = React.useState(initialData.packagingCondition || '');
    const [conditionRating, setConditionRating] = React.useState(initialData.conditionRating || '');
    const [modelAccessories, setModelAccessories] = React.useState(initialData.modelAccessories || '');
    const [dccFunctionsVagon, setDccFunctionsVagon] = React.useState(initialData.dccFunctionsVagon || '');
    const [lastOperationDateVagon, setLastOperationDateVagon] = React.useState(initialData.lastOperationVagon?.date || '');
    const [operatingHoursVagon, setOperatingHoursVagon] = React.useState(initialData.lastOperationVagon?.hours || '');

    const manufacturerOptions = allReferenceData.manufacturers || [];
    const scaleOptions = allReferenceData.scales || [];
    const epochaOptions = allReferenceData.allEpochs || [];
    const spravaOptions = allReferenceData.administrations || [];
    const depoOptions = allReferenceData.depots || [];
    const stavOptions = allReferenceData.conditions || [];
    const obchodnikOptions = allReferenceData.dealers || [];
    const typSpriahlyOptions = allReferenceData.couplingTypes || [];
    const typNakladuOptions = allReferenceData.loadTypes || [];
    const farbaOptions = allReferenceData.colors || [];
    const rozhranieDekoderOptions = allReferenceData.decoderInterfaces || [];
    const typDekoderOptions = allReferenceData.dataDecoderTypes || [];
    const vyrobcaDekoderOptions = allReferenceData.decoderManufacturers || [];
    const wagonTypeOptions = allReferenceData.wagonTypes || [];
    const packagingConditionOptions = allReferenceData.packagingConditions || [];
    const conditionRatingOptions = allReferenceData.conditionRatings || [];
    const decoderOptionsVagon = [
        { value: 'funkcniDekoder', label: 'Funkčný dekodér' },
        { value: 'none', label: 'Žiadny dekodér' },
    ];

    React.useEffect(() => {
        setModelName(initialData.modelName || '');
        setEvidencneCislo(initialData.evidencneCislo || '');
        setTypeVagonu(initialData.typeVagonu || '');
        setManufacturer(initialData.manufacturer || '');
        setScale(initialData.scale || '');
        setEpocha(initialData.epocha || '');
        setSprava(initialData.sprava || '');
        setDepo(initialData.depo || '');
        setStav(initialData.stav || '');
        setDatumZakupeniaModelu(initialData.datumZakupeniaModelu || '');
        setCenaModelu(initialData.cenaModelu || '');
        setObchodnikModelu(initialData.obchodnikModelu || '');
        setZarukaModelu(initialData.zarukaModelu || '');
        setImagePreviewUrl(initialData.imageDataUrl || '');
        setImageFile(null);
        setDlzkaNarazniky(initialData.dlzkaNarazniky || '');
        setHmotnost(initialData.hmotnost || '');
        setPocetNaprav(initialData.pocetNaprav || 2);
        setTypSpriahly(initialData.typSpriahly || '');
        setTypNakladu(initialData.typNakladu || '');
        setFarba(initialData.farba || '');
        setPopis(initialData.popis || '');
        setSelectedDecoderIdVagon(initialData.selectedDecoderIdVagon || '');
        setRozhranieDekoderVagon(initialData.rozhranieDekoderVagon || '');
        setTypDekoderVagon(initialData.typDekoderVagon || '');
        setVyrobcaDekoderVagon(initialData.vyrobcaDekoderVagon || '');
        setAdresaDekoderVagon(initialData.adresaDekoderVagon || '');
        setDatumZakupeniaDekoderVagon(initialData.datumZakupeniaDekoderVagon || '');
        setCenaDekoderVagon(initialData.cenaDekoderVagon || '');
        setObchodnikDekoderVagon(initialData.obchodnikDekoderVagon || '');
        setZarukaDekoderVagon(initialData.zarukaDekoderVagon || '');
        setCvNotesVagon(initialData.cvNotesVagon || '');
        setVoltageDekoderVagon(initialData.powerConsumptionVagon?.voltageDekoderVagon || '');
        setCurrentDekoderVagon(initialData.powerConsumptionVagon?.currentDekoderVagon || '');
        setLastServiceDateVagon(initialData.serviceHistoryVagon?.lastServiceDateVagon || '');
        setServiceDescriptionVagon(initialData.serviceHistoryVagon?.serviceDescriptionVagon || '');
        setServiceCostVagon(initialData.serviceHistoryVagon?.serviceCostVagon || '');
        setServicedByVagon(initialData.serviceHistoryVagon?.servicedByVagon || '');
        setLastModificationDateVagon(initialData.modificationsVagon?.lastModificationDateVagon || '');
        setModificationDescriptionVagon(initialData.modificationsVagon?.modificationDescriptionVagon || '');
        setModificationCostVagon(initialData.modificationsVagon?.modificationCostVagon || '');
        setLocation(initialData.location || '');
        setPackagingCondition(initialData.packagingCondition || '');
        setConditionRating(initialData.conditionRating || '');
        setModelAccessories(initialData.modelAccessories || '');
        setDccFunctionsVagon(initialData.dccFunctionsVagon || '');
        setLastOperationDateVagon(initialData.lastOperationVagon?.date || '');
        setOperatingHoursVagon(initialData.lastOperationVagon?.hours || '');
    }, [initialData]);

    const getCurrentFormData = () => ({
        category: 'Vagón',
        modelName, evidencneCislo, typeVagonu, manufacturer, scale, epocha, sprava, depo, stav,
        datumZakupeniaModelu, cenaModelu, obchodnikModelu, zarukaModelu,
        imageDataUrl: imagePreviewUrl, dlzkaNarazniky, hmotnost, pocetNaprav, typSpriahly,
        typNakladu, farba, popis, selectedDecoderIdVagon, rozhranieDekoderVagon,
        typDekoderVagon, vyrobcaDekoderVagon, adresaDekoderVagon, datumZakupeniaDekoderVagon,
        cenaDekoderVagon, obchodnikDekoderVagon, zarukaDekoderVagon, cvNotesVagon,
        powerConsumptionVagon: { voltageDekoderVagon, currentDekoderVagon },
        serviceHistoryVagon: { lastServiceDateVagon, serviceDescriptionVagon, serviceCostVagon, servicedByVagon },
        modificationsVagon: { lastModificationDateVagon, modificationDescriptionVagon, modificationCostVagon },
        location, packagingCondition, conditionRating, modelAccessories,
        dccFunctionsVagon, lastOperationVagon: { date: lastOperationDateVagon, hours: operatingHoursVagon }
    });

    const handleSave = async () => {
        if (!modelName.trim()) {
            showMessage("Názov modelu je povinný.");
            return;
        }
        if (!manufacturer.trim()) {
            showMessage("Výrobca je povinný.");
            return;
        }
        if (!scale.trim()) {
            showMessage("Mierka je povinná.");
            return;
        }
        if (!typeVagonu.trim()) {
            showMessage("Typ vagónu je povinný.");
            return;
        }
        
        const formData = getCurrentFormData();
        try {
            if (isEditMode) {
                const modelRef = db.collection(`artifacts/${appId}/users/${userId}/myModels`).doc(initialData.id);
                await modelRef.update(formData);
                showMessage("Model úspešne aktualizovaný.");
            } else {
                await db.collection(`artifacts/${appId}/users/${userId}/myModels`).add(formData);
                showMessage("Nový model úspešne pridaný.");
            }
            onCloseForm();
        } catch (error) {
            showMessage(`Chyba pri ukladaní: ${error.message}`);
        }
    };

    const handleDelete = async () => {
        if (isEditMode && confirm("Naozaj chcete odstrániť tento model?")) {
            try {
                const modelRef = db.collection(`artifacts/${appId}/users/${userId}/myModels`).doc(initialData.id);
                await modelRef.delete();
                showMessage("Model úspešne odstránený.");
                onCloseForm();
            } catch (error) {
                showMessage(`Chyba pri odstraňovaní: ${error.message}`);
            }
        }
    };

    const handleImageChange = (file) => {
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreviewUrl(reader.result);
            };
            reader.readAsDataURL(file);
        } else {
            setImageFile(null);
            setImagePreviewUrl('');
        }
    };

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">{isEditMode ? (initialData ? 'Upraviť vagón' : 'Pridať nový vagón') : 'Detail vagónu'}</h1>
            
            {/* Tlačidlá pre ukladanie a mazanie */}
            <div className="flex justify-end gap-4 mb-6">
                <button
                    onClick={onCloseForm}
                    className="bg-gray-500 text-white px-6 py-2 rounded-md hover:bg-gray-600 transition duration-200"
                >
                    Späť na zoznam
                </button>
                {isViewMode && (
                    <button
                        onClick={() => setFormEditMode('edit')}
                        className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Upraviť
                    </button>
                )}
                {(isEditMode || isNewMode) && (
                    <button
                        onClick={handleSave}
                        className="bg-green-600 text-white px-6 py-2 rounded-md hover:bg-green-700 transition duration-200"
                    >
                        Uložiť
                    </button>
                )}
                {isEditMode && initialData.id && (
                    <button
                        onClick={handleDelete}
                        className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700 transition duration-200"
                    >
                        Vymazať
                    </button>
                )}
            </div>

            <div className="flex border-b border-blue-200 mb-6">
                <button type="button" onClick={() => setActiveTab('general')}
                    className={`py-2 px-4 text-lg font-medium ${activeTab === 'general' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>Všeobecné</button>
                <button type="button" onClick={() => setActiveTab('technical')}
                    className={`py-2 px-4 text-lg font-medium ${activeTab === 'technical' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>Technické</button>
                <button type="button" onClick={() => setActiveTab('decoder')}
                    className={`py-2 px-4 text-lg font-medium ${activeTab === 'decoder' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>Dekodér</button>
                <button type="button" onClick={() => setActiveTab('maintenance')}
                    className={`py-2 px-4 text-lg font-medium ${activeTab === 'maintenance' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>Údržba</button>
                <button type="button" onClick={() => setActiveTab('additional')}
                    className={`py-2 px-4 text-lg font-medium ${activeTab === 'additional' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}>Doplnkové</button>
            </div>

            {activeTab === 'general' && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 mb-6">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">Základné údaje</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="md:col-span-1 flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md bg-white min-h-[250px] relative">
                            <div className="image-preview-container">
                                {imagePreviewUrl ? (
                                    <img src={imagePreviewUrl} alt="Náhľad obrázka" className="max-w-full max-h-full object-contain" />
                                ) : (
                                    <div className="image-preview-placeholder">Žiadny obrázok k dispozícii</div>
                                )}
                            </div>
                            <div className="w-full px-2 mt-4">
                                <LabeledInput label="Nahrať obrázok" id="imageVagon" type="file" onChange={handleImageChange} readOnly={isViewMode} />
                            </div>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                            <LabeledInput label="Názov modelu" id="modelNameVagon" value={modelName} onChange={(e) => setModelName(e.target.value)} required readOnly={isViewMode} />
                            <LabeledInput label="Ev. číslo" id="evidencneCisloVagon" value={evidencneCislo} onChange={(e) => setEvidencneCislo(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Typ vagónu" id="typeVagonu" type="select"  value={typeVagonu} onChange={(e) => setTypeVagonu(e.target.value)} options={wagonTypeOptions} required readOnly={isViewMode} />
                            <LabeledInput label="Výrobca" id="manufacturerVagon" type="select" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} options={manufacturerOptions} required readOnly={isViewMode} />
                            <LabeledInput label="Mierka" id="scaleVagon" type="select" value={scale} onChange={(e) => setScale(e.target.value)} options={scaleOptions} required readOnly={isViewMode} />
                            <LabeledInput label="Epocha" id="epochaVagon" type="select" value={epocha} onChange={(e) => setEpocha(e.target.value)} options={epochaOptions} readOnly={isViewMode} />
                            <LabeledInput label="Správa" id="spravaVagon" type="select" value={sprava} onChange={(e) => setSprava(e.target.value)} options={spravaOptions} readOnly={isViewMode} />
                            <LabeledInput label="Depo" id="depoVagon" value={depo} onChange={(e) => setDepo(e.target.value)} options={depoOptions} readOnly={isViewMode} />
                            <LabeledInput label="Stav" id="stavVagon" type="select" value={stav} onChange={(e) => setStav(e.target.value)} options={stavOptions} readOnly={isViewMode} />
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'technical' && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                    <h2 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h2>
                    <LabeledInput label="Dĺžka (mm)" id="dlzkaNaraznikyVagon" type="number" placeholder="147" value={dlzkaNarazniky} onChange={(e) => setDlzkaNarazniky(e.target.value)} readOnly={isViewMode} />
                    <LabeledInput label="Hmotnosť (t)" id="hmotnostVagon" type="number" placeholder="21" value={hmotnost} onChange={(e) => setHmotnost(e.target.value)} readOnly={isViewMode} />
                    <LabeledInput label="Počet náprav" id="pocetNapravVagon" type="number" value={pocetNaprav} onChange={(e) => setPocetNaprav(parseInt(e.target.value) || 0)} min="2" readOnly={isViewMode} />
                    <LabeledInput label="Typ spriahly" id="typSpriahlyVagon" type="select" value={typSpriahly} onChange={(e) => setTypSpriahly(e.target.value)} options={typSpriahlyOptions} readOnly={isViewMode} />
                    <LabeledInput label="Typ nákladu" id="typNakladu" type="text" value={typNakladu} onChange={(e) => setTypNakladu(e.target.value)} options={typNakladuOptions} readOnly={isViewMode} />
                    <LabeledInput label="Farba" id="farba" type="text" value={farba} onChange={(e) => setFarba(e.target.value)} options={farbaOptions} readOnly={isViewMode} />
                    <LabeledInput label="Popis:" id="popisVagon" type="textarea" value={popis} onChange={(e) => setPopis(e.target.value)} readOnly={isViewMode} />
                </div>
            )}
            {activeTab === 'decoder' && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">Dekodér</h2>
                    <LabeledInput label="Vyberte dekodér" id="selectedDecoderIdVagon" type="select" value={selectedDecoderIdVagon}           onChange={(e) => setSelectedDecoderIdVagon(e.target.value)} options={decoderOptionsVagon} readOnly={isViewMode} />
                    {/* Všetky polia dekodéra sa zobrazia vždy, keď je aktívna záložka Dekodér */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                            <LabeledInput label="Rozhranie" id="rozhranieDekoderVagon" type="select" value={rozhranieDekoderVagon} onChange={(e) => setRozhranieDekoderVagon(e.target.value)} options={rozhranieDekoderOptions} readOnly={isViewMode} />
                            <LabeledInput label="Typ" id="typDekoderVagon" type="select" value={typDekoderVagon} onChange={(e) => setTypDekoderVagon(e.target.value)} options={typDekoderOptions} readOnly={isViewMode} />
                            <LabeledInput label="Výrobca" id="vyrobcaDekoderVagon" type="select" value={vyrobcaDekoderVagon} onChange={(e) => setVyrobcaDekoderVagon(e.target.value)} options={vyrobcaDekoderOptions} readOnly={isViewMode} />
                            <LabeledInput label="Adresa" id="adresaDekoderVagon" value={adresaDekoderVagon} onChange={(e) => setAdresaDekoderVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Dátum zak." id="datumZakupeniaDekoderVagon" type="date" value={datumZakupeniaDekoderVagon} onChange={(e) => setDatumZakupeniaDekoderVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Cena" id="cenaDekoderVagon" type="number" value={cenaDekoderVagon} onChange={(e) => setCenaDekoderVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Obchodník" id="obchodnikDekoderVagon" type="select" value={obchodnikDekoderVagon} onChange={(e) => setObchodnikDekoderVagon(e.target.value)} options={obchodnikOptions} readOnly={isViewMode} />
                            <LabeledInput label="Záruka do" id="zarukaDekoderVagon" type="date" value={zarukaDekoderVagon} onChange={(e) => setZarukaDekoderVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Poznámky k CV:" id="cvNotesVagon" type="textarea" value={cvNotesVagon} onChange={(e) => setCvNotesVagon(e.target.value)} spanFull={true} readOnly={isViewMode}/>
                            <h3 className="text-lg font-semibold text-blue-600 mt-4 col-span-full">Spotreba energie</h3>
                            <LabeledInput label="Napätie (V)" id="voltageDekoderVagon" type="number" value={voltageDekoderVagon} onChange={(e) => setVoltageDekoderVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Prúd (mA)" id="currentDekoderVagon" type="number" value={currentDekoderVagon} onChange={(e) => setCurrentDekoderVagon(e.target.value)} readOnly={isViewMode} />
                            <h3 className="text-lg font-semibold text-blue-600 mt-4 col-span-full">DCC funkcie (F0-F28)</h3>
                            <LabeledInput label="Popis funkcií" id="dccFunctionsVagon" type="textarea" value={dccFunctionsVagon} onChange={(e) => setDccFunctionsVagon(e.target.value)} spanFull={true} readOnly={isViewMode}/>
                        </div>
                </div>
            )}
            {activeTab === 'maintenance' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Servis a údržba</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <LabeledInput label="Dátum posledného servisu" id="lastServiceDateVagon" type="date" value={lastServiceDateVagon} onChange={(e) => setLastServiceDateVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Náklady na servis (€)" id="serviceCostVagon" type="number" value={serviceCostVagon} onChange={(e) => setServiceCostVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Servis vykonal" id="servicedByVagon" type="text" value={servicedByVagon} onChange={(e) => setServicedByVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Popis vykonaných prác" id="serviceDescriptionVagon" type="textarea" value={serviceDescriptionVagon} onChange={(e) => setServiceDescriptionVagon(e.target.value)} readOnly={isViewMode} spanFull={true} />
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Modifikácie a úpravy</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <LabeledInput label="Dátum modifikácie" id="lastModificationDateVagon" type="date" value={lastModificationDateVagon} onChange={(e) => setLastModificationDateVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Náklady na modifikáciu (€)" id="modificationCostVagon" type="number" value={modificationCostVagon} onChange={(e) => setModificationCostVagon(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Popis vykonanej úpravy" id="modificationDescriptionVagon" type="textarea" value={modificationDescriptionVagon} onChange={(e) => setModificationDescriptionVagon(e.target.value)} readOnly={isViewMode} spanFull={true} />
                        </div>
                    </div>
                </div>
            )}
            {activeTab === 'additional' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               
                        <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                            <h2 className="text-xl font-semibold text-blue-700 mb-4">Ďalšie informácie</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                <LabeledInput label="Dátum zak." id="datumZakupeniaModeluVagon" type="date" value={datumZakupeniaModelu} onChange={(e) => setDatumZakupeniaModelu(e.target.value)} readOnly={isViewMode} />
                                <LabeledInput label="Cena" id="cenaModeluVagon" type="number" value={cenaModelu} onChange={(e) => setCenaModelu(e.target.value)} readOnly={isViewMode} />
                                <LabeledInput label="Obchodník" id="obchodnikModeluVagon" type="select" value={obchodnikModelu} onChange={(e) => setObchodnikModelu(e.target.value)} options={obchodnikOptions} readOnly={isViewMode} />
                                <LabeledInput label="Záruka do" id="zarukaModeluVagon" type="date" value={zarukaModelu} onChange={(e) => setZarukaModelu(e.target.value)} readOnly={isViewMode} />
                                <LabeledInput label="Umiestnenie" id="locationVagon" value={location} onChange={(e) => setLocation(e.target.value)} readOnly={isViewMode} />
                                <LabeledInput label="Stav obalu" id="packagingConditionVagon" type="select" value={packagingCondition} onChange={(e) => setPackagingCondition(e.target.value)} options={packagingConditionOptions} readOnly={isViewMode} />
                                <LabeledInput label="Hodnotenie stavu" id="conditionRatingVagon" type="select" value={conditionRating} onChange={(e) => setConditionRating(e.target.value)} options={conditionRatingOptions} readOnly={isViewMode} />
                                <LabeledInput label="Príslušenstvo k modelu" id="modelAccessoriesVagon" type="textarea" value={modelAccessories} onChange={(e) => setModelAccessories(e.target.value)} readOnly={isViewMode} spanFull={true} />
                            </div>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                            <h2 className="text-xl font-semibold text-blue-700 mb-4">Posledná jazda / Prevádzkové hodiny</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                <LabeledInput label="Dátum poslednej prevádzky" id="lastOperationDateVagon" type="date" value={lastOperationDateVagon} onChange={(e) => setLastOperationDateVagon(e.target.value)} readOnly={isViewMode} />
                                <LabeledInput label="Prevádzkové hodiny" id="operatingHoursVagon" type="number" value={operatingHoursVagon} onChange={(e) => setOperatingHoursVagon(e.target.value)} readOnly={isViewMode} />
                            </div>
                        </div>
                    </div>
            
            )}
        </div>
    );
};

window.VagonForm = VagonForm;