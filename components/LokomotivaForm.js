       // =====================================================================================
        // KOMPONENTY: forms/LokomotivaForm.js
        // =====================================================================================
// components/LokomotivaForm.js
const LokomotivaForm = ({ initialData = {}, showMessage, allReferenceData = {}, db, userId, appId, onCloseForm, formEditMode, setFormEditMode }) => {
    const isEditMode = formEditMode === 'edit';
    const isNewMode = formEditMode === 'new';
    const isViewMode = formEditMode === 'view';
    const [activeTab, setActiveTab] = React.useState('general');
    const [modelName, setModelName] = React.useState(initialData.modelName || '');
    const [evidencneCislo, setEvidencneCislo] = React.useState(initialData.evidencneCislo || '');
    const [type, setType] = React.useState(initialData.type || '');
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
    const [maxRychlost, setMaxRychlost] = React.useState(initialData.maxRychlost || '');
    const [minPolomer, setMinPolomer] = React.useState(initialData.minPolomer || '');
    const [typSpriahly, setTypSpriahly] = React.useState(initialData.typSpriahly || '');
    const [pocetNaprav, setPocetNaprav] = React.useState(initialData.pocetNaprav || 2);
    const [pocetHnanychNaprav, setPocetHnanychNaprav] = React.useState(initialData.pocetHnanychNaprav || 0);
    const [pocetBandazi, setPocetBandazi] = React.useState(initialData.pocetBandazi || 0);
    const [bandazeNaKolesach, setBandazeNaKolesach] = React.useState(initialData.bandazeNaKolesach || [false, false, false, false]);
    const [isEditingAxles, setIsEditingAxles] = React.useState(true);
    const [selectedDecoderId, setSelectedDecoderId] = React.useState(initialData.selectedDecoderId || '');
    const [rozhranieDekoder, setRozhranieDekoder] = React.useState(initialData.rozhranieDekoder || '');
    const [typDekoder, setTypDekoder] = React.useState(initialData.typDekoder || '');
    const [vyrobcaDekoder, setVyrobcaDekoder] = React.useState(initialData.vyrobcaDekoder || '');
    const [adresaDekoder, setAdresaDekoder] = React.useState(initialData.adresaDekoder || '');
    const [datumZakupeniaDekoder, setDatumZakupeniaDekoder] = React.useState(initialData.datumZakupeniaDekoder || '');
    const [cenaDekoder, setCenaDekoder] = React.useState(initialData.cenaDekoder || '');
    const [obchodnikDekoder, setObchodnikDekoder] = React.useState(initialData.obchodnikDekoder || '');
    const [zarukaDekoder, setZarukaDekoder] = React.useState(initialData.zarukaDekoder || '');
    const [cvValue1, setCvValue1] = React.useState(initialData.cvValues?.cvValue1 || '');
    const [cvValue2, setCvValue2] = React.useState(initialData.cvValues?.cvValue2 || '');
    const [cvValue3, setCvValue3] = React.useState(initialData.cvValues?.cvValue3 || '');
    const [cvNotes, setCvNotes] = React.useState(initialData.cvNotes || '');
    const [voltageDekoder, setVoltageDekoder] = React.useState(initialData.powerConsumption?.voltageDekoder || '');
    const [currentDekoder, setCurrentDekoder] = React.useState(initialData.powerConsumption?.currentDekoder || '');
    const [zvuk, setZvuk] = React.useState(initialData.funkcie?.zvuk || false);
    const [svetlaSmer, setSvetlaSmer] = React.useState(initialData.funkcie?.svetlaSmer || false);
    const [vnutorneOsvetlenie, setVnutorneOsvetlenie] = React.useState(initialData.funkcie?.vnutorneOsvetlenie || false);
    const [generatorDymu, setGeneratorDymu] = React.useState(initialData.funkcie?.generatorDymu || false);
    const [elektrickeSpriahlo, setElektrickeSpriahlo] = React.useState(initialData.funkcie?.elektrickeSpriahlo || false);
    const [lastServiceDate, setLastServiceDate] = React.useState(initialData.serviceHistory?.lastServiceDate || '');
    const [serviceDescription, setServiceDescription] = React.useState(initialData.serviceHistory?.serviceDescription || '');
    const [serviceCost, setServiceCost] = React.useState(initialData.serviceHistory?.serviceCost || '');
    const [servicedBy, setServicedBy] = React.useState(initialData.serviceHistory?.servicedBy || '');
    const [lastModificationDate, setLastModificationDate] = React.useState(initialData.modifications?.lastModificationDate || '');
    const [modificationDescription, setModificationDescription] = React.useState(initialData.modifications?.modificationDescription || '');
    const [modificationCost, setModificationCost] = React.useState(initialData.modifications?.modificationCost || '');
    const [location, setLocation] = React.useState(initialData.location || '');
    const [packagingCondition, setPackagingCondition] = React.useState(initialData.packagingCondition || '');
    const [conditionRating, setConditionRating] = React.useState(initialData.conditionRating || '');
    const [modelAccessories, setModelAccessories] = React.useState(initialData.modelAccessories || '');
    const [soundProjectName, setSoundProjectName] = React.useState(initialData.soundProject?.name || '');
    const [soundProjectVersion, setSoundProjectVersion] = React.useState(initialData.soundProject?.version || '');
    const [soundProjectAuthor, setSoundProjectAuthor] = React.useState(initialData.soundProject?.author || '');
    const [soundProjectLink, setSoundProjectLink] = React.useState(initialData.soundProject?.link || '');
    const [dccFunctions, setDccFunctions] = React.useState(initialData.dccFunctions || '');
    const [lastOperationDate, setLastOperationDate] = React.useState(initialData.lastOperation?.date || '');
    const [operatingHours, setOperatingHours] = React.useState(initialData.lastOperation?.hours || '');

    const getCurrentFormData = () => ({
        category: 'Lokomotíva',
        modelName, evidencneCislo, type, manufacturer, scale, epocha, sprava, depo, stav,
        datumZakupeniaModelu, cenaModelu, obchodnikModelu, zarukaModelu,
        imageDataUrl: imagePreviewUrl, dlzkaNarazniky, hmotnost, maxRychlost, minPolomer,
        typSpriahly, pocetNaprav, pocetHnanychNaprav, pocetBandazi, bandazeNaKolesach,
        selectedDecoderId, rozhranieDekoder, typDekoder, vyrobcaDekoder, adresaDekoder,
        datumZakupeniaDekoder, cenaDekoder, obchodnikDekoder, zarukaDekoder,
        cvValues: { cvValue1, cvValue2, cvValue3 }, cvNotes,
        powerConsumption: { voltageDekoder, currentDekoder },
        funkcie: { zvuk, svetlaSmer, vnutorneOsvetlenie, generatorDymu, elektrickeSpriahlo },
        serviceHistory: { lastServiceDate, serviceDescription, serviceCost, servicedBy },
        modifications: { lastModificationDate, modificationDescription, modificationCost },
        location, packagingCondition, conditionRating, modelAccessories,
        soundProject: { name: soundProjectName, version: soundProjectVersion, author: soundProjectAuthor, link: soundProjectLink },
        dccFunctions, lastOperation: { date: lastOperationDate, hours: operatingHours }
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
    const handleBandazChange = (index) => {
        const newBandaze = [...bandazeNaKolesach];
        newBandaze[index] = !newBandaze[index];
        setBandazeNaKolesach(newBandaze);
        setPocetBandazi(newBandaze.filter(Boolean).length);
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

    const decoderOptions = [
        { value: 'decoder1', label: 'ESU LokSound 5' },
        { value: 'decoder2', label: 'Zimo MX645' },
        { value: 'decoder3', label: 'Lenz Silver+' },
        { value: 'none', label: 'Žiadny dekodér' },
    ];

    return (
        <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
            <h1 className="text-3xl font-bold text-blue-800 mb-6">Lokomotíva</h1>
            
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
                                <LabeledInput label="Nahrať obrázok" id="image" type="file" onChange={handleImageChange} readOnly={isViewMode} />
                            </div>
                        </div>
                        <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                            <LabeledInput label="Názov modelu" id="modelName"  placeholder="Parná 475.1" value={modelName} onChange={e => setModelName(e.target.value)} required readOnly={isViewMode} />
                            <LabeledInput label="Ev. číslo" id="evidencneCislo" placeholder="475.175" value={evidencneCislo} onChange={e => setEvidencneCislo(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="Typ" id="type" type="select" value={type} onChange={e => setType(e.target.value)} options={allReferenceData.locomotiveTypes || []} readOnly={isViewMode} />
                            <LabeledInput label="Výrobca" id="manufacturer" type="select" value={manufacturer} onChange={e => setManufacturer(e.target.value)} options={allReferenceData.manufacturers || []} required readOnly={isViewMode} />
                            <LabeledInput label="Mierka" id="scale" type="select" value={scale} onChange={e => setScale(e.target.value)} options={allReferenceData.scales || []} required readOnly={isViewMode} />
                            <LabeledInput label="Epocha" id="epocha" type="select" value={epocha} onChange={e => setEpocha(e.target.value)} options={allReferenceData.epochs || []} readOnly={isViewMode} />
                            <LabeledInput label="Správa" id="sprava" type="select" value={sprava} onChange={e => setSprava(e.target.value)} options={allReferenceData.administrations || []} readOnly={isViewMode} />
                            <LabeledInput label="Depo" id="depo" type="select" value={depo} onChange={e => setDepo(e.target.value)} options={allReferenceData.depots || []} readOnly={isViewMode} />
                            <LabeledInput label="Stav" id="stav" type="select" value={stav} onChange={e => setStav(e.target.value)} options={allReferenceData.conditions || []} readOnly={isViewMode} />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'technical' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
               
                        <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                <LabeledInput label="Dĺžka (mm)" id="dlzkaNarazniky" placeholder="210" type="number" value={dlzkaNarazniky} onChange={e => setDlzkaNarazniky(e.target.value)} readOnly={isViewMode}/>
                                <LabeledInput label="Hmotnosť (t)" id="hmotnost" placeholder="45" type="number" value={hmotnost} onChange={e => setHmotnost(e.target.value)} readOnly={isViewMode}/>
                                <LabeledInput label="Max. rýchlosť (km/h)" id="maxRychlost" type="number" placeholder="120" value={maxRychlost} onChange={e => setMaxRychlost(e.target.value)} readOnly={isViewMode} />
                                <LabeledInput label="Min. polomer (mm)" id="minPolomer" type="number" placeholder="360" value={minPolomer} onChange={e => setMinPolomer(e.target.value)} readOnly={isViewMode}/>
                                <LabeledInput label="Typ spriahla" id="typSpriahly" type="select" value={typSpriahly} onChange={e => setTypSpriahly(e.target.value)} options={allReferenceData.couplingTypes || []} required readOnly={isViewMode}/>
                            </div>
                        </div>
       
                        
              <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                            <h2 className="text-xl font-semibold text-blue-700 mb-2">Nápravy</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-start">
                                <div className="flex flex-col gap-3 w-full">
                                    <LabeledInput label="Počet náprav" id="pocetNaprav" type="number" value={pocetNaprav} onChange={e => setPocetNaprav(Number(e.target.value))} min={2} max={4} readOnly={isViewMode}/>
                                    <LabeledInput label="Počet hnaných náprav" id="pocetHnanychNaprav" type="number" value={pocetHnanychNaprav} onChange={e => setPocetHnanychNaprav(Number(e.target.value))} min={0} readOnly={isViewMode}/>
                                    <LabeledInput label="Počet bandaží" id="pocetBandazi" type="number" value={pocetBandazi} readOnly />
                                </div>
                                <div className="flex flex-col items-center justify-start h-full">
                                    <div className="arrow-text-container">
                                        <div className="arrow-indicator"></div>
                                        <span>Čelo lokomotívy</span>
                                    </div>
                                    <AxleVisualization
                                        numberOfAxles={pocetNaprav}
                                        bandagedWheels={bandazeNaKolesach}
                                        onBandageChange={handleBandazChange}
                                    />
                                    {pocetBandazi > 0 && (
                                        <p className="text-sm text-gray-600 mt-2 bandage-info-text">Bandáže sú vyznačené červene.</p>
                                    )}
                                </div>
                                <div className="relative w-full h-full flex flex-col items-end justify-between">
                                    {isEditingAxles && (
                                        <div className="wheel-checkboxes-container">
                                            <p className="text-sm font-semibold text-gray-700 mb-1">Bandáže:</p>
                                            <div className="wheel-checkboxes">
                                                {bandazeNaKolesach.map((hasBandage, index) => (
                                                    <div key={index} className="wheel-checkbox-item">
                                                        <input
                                                            type="checkbox"
                                                            id={`bandaz-visual-${index}`}
                                                            checked={hasBandage}
                                                            onChange={() => handleBandazChange(index)} 
                                                            className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                                                         />
                                                        <label htmlFor={`bandaz-visual-${index}`} className="text-xs text-gray-700">{index + 1} </label>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
  

                                    )}
                                    <div className="w-full flex justify-end mt-auto">
                                        <button
                                            type="button"
                                            onClick={() => setIsEditingAxles(!isEditingAxles)}
                                            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-200 text-sm"
                                        >
                                            {isEditingAxles ? 'Skryť bandáže' : 'Zobraziť bandáže'}
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                </div>
            )}

            {activeTab === 'decoder' && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">Dekodér</h2>
                    <LabeledInput
                        label="Vyberte dekodér"
                        id="selectedDecoderId"
                        type="select"
                        value={selectedDecoderId}
                        onChange={e => setSelectedDecoderId(e.target.value)}
                        options={decoderOptions}
                        readOnly={isViewMode}
                    />
                    {selectedDecoderId && selectedDecoderId !== 'none' && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                            <LabeledInput label="Rozhranie" id="rozhranieDekoder" type="select" value={rozhranieDekoder} onChange={e => setRozhranieDekoder(e.target.value)} readOnly={isViewMode} options={allReferenceData.decoderInterfaces || []} />
                            <LabeledInput label="Typ" id="typDekoder" type="select" value={typDekoder} onChange={e => setTypDekoder(e.target.value)} readOnly={isViewMode}options={allReferenceData.dataDecoderTypes || []}/>
                            <LabeledInput label="Výrobca" id="vyrobcaDekoder" type="select" value={vyrobcaDekoder} onChange={e => setVyrobcaDekoder(e.target.value)} readOnly={isViewMode} options={allReferenceData.decoderManufacturers || []}/>
                            <LabeledInput label="Adresa" id="adresaDekoder" value={adresaDekoder} onChange={e => setAdresaDekoder(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="CV1 (Adresa)" id="cvValue1" type="number" value={cvValue1} onChange={e => setCvValue1(e.target.value)} readOnly={isViewMode} />
                            <LabeledInput label="CV2 (Min. rýchlosť)" id="cvValue2" type="number" value={cvValue2} onChange={e => setCvValue2(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Dátum zak." id="datumZakupeniaDekoder" type="date" value={datumZakupeniaDekoder} onChange={e => setDatumZakupeniaDekoder(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Cena" id="cenaDekoder" type="number" value={cenaDekoder} onChange={e => setCenaDekoder(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Obchodník" id="obchodnikDekoder" value={obchodnikDekoder} onChange={e => setObchodnikDekoder(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Záruka do" id="zarukaDekoder" type="date" value={zarukaDekoder} onChange={e => setZarukaDekoder(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="CV3 (Zrýchlenie)" id="cvValue3" type="number" value={cvValue3} onChange={e => setCvValue3(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Poznámky k CV:" id="cvNotes" type="textarea" value={cvNotes} onChange={e => setCvNotes(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Napätie (V)" id="voltageDekoder" type="number" value={voltageDekoder} onChange={e => setVoltageDekoder(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Prúd (mA)" id="currentDekoder" type="number" value={currentDekoder} onChange={e => setCurrentDekoder(e.target.value)} readOnly={isViewMode} />
                            <LabeledCheckbox label="Zvukový dekodér" id="zvuk" checked={zvuk} onChange={e => setZvuk(e.target.checked)} readOnly={isViewMode}/>
                            <LabeledCheckbox label="Svetlá podľa smeru" id="svetlaSmer" checked={svetlaSmer} onChange={e => setSvetlaSmer(e.target.checked)} readOnly={isViewMode}/>
                            <LabeledCheckbox label="Vnútorné osvetlenie" id="vnutorneOsvetlenie" checked={vnutorneOsvetlenie} onChange={e => setVnutorneOsvetlenie(e.target.checked)} readOnly={isViewMode} />
                            <LabeledCheckbox label="Generátor dymu" id="generatorDymu" checked={generatorDymu} onChange={e => setGeneratorDymu(e.target.checked)} readOnly={isViewMode}/>
                            <LabeledCheckbox label="Elektrické spriahlo" id="elektrickeSpriahlo" checked={elektrickeSpriahlo} onChange={e => setElektrickeSpriahlo(e.target.checked)} readOnly={isViewMode}/>
                        </div>
                    )}
                </div>
            )}

            {activeTab === 'maintenance' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Servis a údržba</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <LabeledInput label="Dátum posledného servisu" id="lastServiceDate" type="date" value={lastServiceDate} onChange={e => setLastServiceDate(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Náklady na servis (€)" placeholder="0.00" id="serviceCost" type="number" value={serviceCost} onChange={e => setServiceCost(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Servis vykonal" placeholder="Meno/Firma" id="servicedBy" value={servicedBy} onChange={e => setServicedBy(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Popis vykonaných prác" id="serviceDescription" type="textarea" value={serviceDescription} onChange={e => setServiceDescription(e.target.value)} readOnly={isViewMode}/>
                        </div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                        <h2 className="text-xl font-semibold text-blue-700 mb-4">Modifikácie a úpravy</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                            <LabeledInput label="Dátum modifikácie" id="lastModificationDate" type="date" value={lastModificationDate} onChange={e => setLastModificationDate(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Náklady na modifikáciu (€)" id="modificationCost" type="number" value={modificationCost} onChange={e => setModificationCost(e.target.value)} readOnly={isViewMode}/>
                            <LabeledInput label="Popis vykonanej úpravy" id="modificationDescription" type="textarea" value={modificationDescription} onChange={e => setModificationDescription(e.target.value)} readOnly={isViewMode} />
                        </div>
                    </div>
                </div>
            )}

            {activeTab === 'additional' && (
                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                    <h2 className="text-xl font-semibold text-blue-700 mb-4">Doplnkové údaje</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                        <LabeledInput label="Umiestnenie" placeholder="Vitrina A" id="location" value={location} onChange={e => setLocation(e.target.value)}readOnly={isViewMode} />
                        <LabeledInput label="Stav balenia" id="packagingCondition" type="select" value={packagingCondition} onChange={e => setPackagingCondition(e.target.value)} options={allReferenceData.packagingConditions || []} required readOnly={isViewMode} readOnly={isViewMode}/>
                        <LabeledInput label="Hodnotenie stavu" id="conditionRating" type="select" value={conditionRating} onChange={e => setConditionRating(e.target.value)} options={allReferenceData.conditionRatings || []} required readOnly={isViewMode} readOnly={isViewMode}/>
                        <LabeledInput label="Doplnky modelu" id="modelAccessories" value={modelAccessories} onChange={e => setModelAccessories(e.target.value)} readOnly={isViewMode}/>
                        <LabeledInput label="Názov zvukového projektu" id="soundProjectName" value={soundProjectName} onChange={e => setSoundProjectName(e.target.value)} readOnly={isViewMode} />
                        <LabeledInput label="Verzia zvukového projektu" id="soundProjectVersion" value={soundProjectVersion} onChange={e => setSoundProjectVersion(e.target.value)} readOnly={isViewMode}/>
                        <LabeledInput label="Autor zvukového projektu" id="soundProjectAuthor" value={soundProjectAuthor} onChange={e => setSoundProjectAuthor(e.target.value)} readOnly={isViewMode}/>
                        <LabeledInput label="Odkaz na zvukový projekt" id="soundProjectLink" placeholder="www.zvukovy_projekt.com" value={soundProjectLink} onChange={e => setSoundProjectLink(e.target.value)} readOnly={isViewMode} />
                        <LabeledInput label="DCC funkcie" id="dccFunctions" type="textarea" value={dccFunctions} onChange={e => setDccFunctions(e.target.value)} readOnly={isViewMode}/>
                        <LabeledInput label="Dátum poslednej prevádzky" id="lastOperationDate" type="date" value={lastOperationDate} onChange={e => setLastOperationDate(e.target.value)} readOnly={isViewMode}/>
                        <LabeledInput label="Prevádzkové hodiny" id="operatingHours" value={operatingHours} onChange={e => setOperatingHours(e.target.value)} readOnly={isViewMode} />
                    </div>
                </div>
            )}
        </div>
    );
};

window.LokomotivaForm = LokomotivaForm;