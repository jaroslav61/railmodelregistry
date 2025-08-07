// ==========================================
        // KOMPONENTY: forms/PrislusenstvoForm.js
        // =========================================
        const PrislusenstvoForm = React.forwardRef(({ initialData, isEditMode, showMessage, allReferenceData }, ref) => {

            const [activeTab, setActiveTab] = React.useState('general'); // Nový stav pre aktívnu záložku

            const [modelName, setModelName] = React.useState(initialData?.modelName || '');
            const [subCategory, setSubCategory] = React.useState(initialData?.subCategory || '');
            const [manufacturer, setManufacturer] = React.useState(initialData?.manufacturer || '');
            const [scale, setScale] = React.useState(initialData?.scale || '');
            const [datumZakupeniaModelu, setDatumZakupeniaModelu] = React.useState(initialData?.datumZakupeniaModelu || '');
            const [cenaModelu, setCenaModelu] = React.useState(initialData?.cenaModelu || '');
            const [obchodnikModelu, setObchodnikModelu] = React.useState(initialData?.obchodnikModelu || '');
            const [zarukaModelu, setZarukaModelu] = React.useState(initialData?.zarukaModelu || '');
            const [popis, setPopis] = React.useState(initialData?.popis || '');
            const [imageFile, setImageFile] = React.useState(null);
            const [imagePreviewUrl, setImagePreviewUrl] = React.useState(initialData?.imageDataUrl || '');

          
            const [evidencneCisloAuto, setEvidencneCisloAuto] = React.useState(initialData?.evidencneCisloAuto || '');
            const [stavAuto, setStavAuto] = React.useState(initialData?.stavAuto || '');
            const [znackaAuto, setZnackaAuto] = React.useState(initialData?.znackaAuto || '');
            const [zvukAuto, setZvukAuto] = React.useState(initialData?.zvukAuto || false);
            const [osvetlenieAuto, setOsvetlenieAuto] = React.useState(initialData?.osvetlenieAuto || false);
            const [selectedDecoderIdAuto, setSelectedDecoderIdAuto] = React.useState(initialData?.selectedDecoderIdAuto || '');
            const [cvNotesAuto, setCvNotesAuto] = React.useState(initialData?.cvNotesAuto || '');
            const [datumZakupeniaDekoderAuto, setDatumZakupeniaDekoderAuto] = React.useState(initialData?.datumZakupeniaDekoderAuto || '');
            const [cenaDekoderAuto, setCenaDekoderAuto] = React.useState(initialData?.cenaDekoderAuto || '');
            const [obchodnikDekoderAuto, setObchodnikDekoderAuto] = React.useState(initialData?.obchodnikDekoderAuto || '');
            const [cvAdresaDekoderAuto, setCvAdresaDekoderAuto] = React.useState(initialData?.cvAdresaDekoderAuto || '');
            const [decoderNotesAuto, setDecoderNotesAuto] = React.useState(initialData?.decoderNotesAuto || '');
            const [vyrobcaDekoderAuto, setVyrobcaDekoderAuto] = React.useState(initialData?.vyrobcaDekoderAuto || '');
            const [dccFunctionsAuto, setDccFunctionsAuto] = React.useState(initialData?.dccFunctionsAuto || '');
            const [lastOperationDateAuto, setLastOperationDateAuto] = React.useState(initialData?.lastOperationAuto?.date || '');
            const [operatingHoursAuto, setOperatingHoursAuto] = React.useState(initialData?.lastOperationAuto?.hours || '');
            const [voltageDekoderAuto, setVoltageDekoderAuto] = React.useState(initialData?.powerConsumptionAuto?.voltageDekoderAuto || '');
            const [currentDekoderAuto, setCurrentDekoderAuto] = React.useState(initialData?.powerConsumptionAuto?.currentDekoderAuto || '');

            const decoderOptionsAuto = [
                { value: 'decoderC', label: 'Dekodér C' },
                { value: 'decoderD', label: 'Dekodér D' },
                { value: 'none', label: 'Žiadny dekodér' },
            ];

            const [buildingType, setBuildingType] = React.useState(initialData?.buildingType || '');
            const [patina, setPatina] = React.useState(initialData?.patina || false);
            const [buildingLength, setBuildingLength] = React.useState(initialData?.buildingLength || '');
            const [buildingWidth, setBuildingWidth] = React.useState(initialData?.buildingWidth || '');
            const [buildingHeight, setBuildingHeight] = React.useState(initialData?.buildingHeight || '');
            const [buildingMaterial, setBuildingMaterial] = React.useState(initialData?.buildingMaterial || '');
            const [buildingNotes, setBuildingNotes] = React.useState(initialData?.buildingNotes || '');

            const [selectedDecoderIdBuilding, setSelectedDecoderIdBuilding] = React.useState(initialData?.selectedDecoderIdBuilding || '');
            const [rozhranieDekoderBuilding, setRozhranieDekoderBuilding] = React.useState(initialData?.rozhranieDekoderBuilding || '');
            const [typDekoderBuilding, setTypDekoderBuilding] = React.useState(initialData?.typDekoderBuilding || '');
            const [vyrobcaDekoderBuilding, setVyrobcaDekoderBuilding] = React.useState(initialData?.vyrobcaDekoderBuilding || '');
            const [adresaDekoderBuilding, setAdresaDekoderBuilding] = React.useState(initialData?.adresaDekoderBuilding || '');
            const [datumZakupeniaDekoderBuilding, setDatumZakupeniaDekoderBuilding] = React.useState(initialData?.datumZakupeniaDekoderBuilding || '');
            const [cenaDekoderBuilding, setCenaDekoderBuilding] = React.useState(initialData?.cenaDekoderBuilding || '');
            const [obchodnikDekoderBuilding, setObchodnikDekoderBuilding] = React.useState(initialData?.obchodnikDekoderBuilding || '');
            const [zarukaDekoderBuilding, setZarukaDekoderBuilding] = React.useState(initialData?.zarukaDekoderBuilding || '');
            const [cvNotesBuilding, setCvNotesBuilding] = React.useState(initialData?.cvNotesBuilding || '');
            const [dccFunctionsBuilding, setDccFunctionsBuilding] = React.useState(initialData?.dccFunctionsBuilding || '');
            const [lastOperationDateBuilding, setLastOperationDateBuilding] = React.useState(initialData?.lastOperationBuilding?.date || '');
            const [operatingHoursBuilding, setOperatingHoursBuilding] = React.useState(initialData?.operatingHoursBuilding || '');
            const [voltageDekoderBuilding, setVoltageDekoderBuilding] = React.useState(initialData?.powerConsumptionBuilding?.voltageDekoderBuilding || '');
            const [currentDekoderBuilding, setCurrentDekoderBuilding] = React.useState(initialData?.powerConsumptionBuilding?.currentDekoderBuilding || '');

            const decoderOptionsBuilding = [
                { value: 'decoderE', label: 'Dekodér E (Osvetlenie)' },
                { value: 'decoderF', label: 'Dekodér F (Zvuk)' },
                { value: 'none', label: 'Žiadny dekodér' },
            ];

            const [trackType, setTrackType] = React.useState(initialData?.trackType || '');
            const [trackLengthRadius, setTrackLengthRadius] = React.useState(initialData?.trackLengthRadius || '');
            const [trackMaterial, setTrackMaterial] = React.useState(initialData?.trackMaterial || '');
            const [trackSystem, setTrackSystem] = React.useState(initialData?.trackSystem || '');
            const [trackNotes, setTrackNotes] = React.useState(initialData?.trackNotes || '');
            const [pocetKolajnic, setPocetKolajnic] = React.useState(initialData?.pocetKolajnic || '');

            const [komunikaciaSignal, setKomunikaciaSignal] = React.useState(initialData?.komunikaciaSignal || '');
            const [signalType, setSignalType] = React.useState(initialData?.signalType || '');
            const [signalKind, setSignalKind] = React.useState(initialData?.signalKind || '');
            const [pocetSvetielSignal, setPocetSvetielSignal] = React.useState(initialData?.pocetSvetielSignal || '');
            const [signalNotes, setSignalNotes] = React.useState(initialData?.signalNotes || '');

            const [selectedDecoderIdSignal, setSelectedDecoderIdSignal] = React.useState(initialData?.selectedDecoderIdSignal || '');
            const [rozhranieDekoderSignal, setRozhranieDekoderSignal] = React.useState(initialData?.rozhranieDekoderSignal || '');
            const [typDekoderSignal, setTypDekoderSignal] = React.useState(initialData?.typDekoderSignal || '');
            const [vyrobcaDekoderSignal, setVyrobcaDekoderSignal] = React.useState(initialData?.vyrobcaDekoderSignal || '');
            const [adresaDekoderSignal, setAdresaDekoderSignal] = React.useState(initialData?.adresaDekoderSignal || '');
            const [datumZakupeniaDekoderSignal, setDatumZakupeniaDekoderSignal] = React.useState(initialData?.datumZakupeniaDekoderSignal || '');
            const [cenaDekoderSignal, setCenaDekoderSignal] = React.useState(initialData?.cenaDekoderSignal || '');
            const [obchodnikDekoderSignal, setObchodnikDekoderSignal] = React.useState(initialData?.obchodnikDekoderSignal || '');
            const [zarukaDekoderSignal, setZarukaDekoderSignal] = React.useState(initialData?.zarukaDekoderSignal || '');
            const [cvNotesSignal, setCvNotesSignal] = React.useState(initialData?.cvNotesSignal || '');
            const [dccFunctionsSignal, setDccFunctionsSignal] = React.useState(initialData?.dccFunctionsSignal || '');
            const [lastOperationDateSignal, setLastOperationDateSignal] = React.useState(initialData?.lastOperationSignal?.date || '');
            const [operatingHoursSignal, setOperatingHoursSignal] = React.useState(initialData?.lastOperationSignal?.hours || '');
            const [voltageDekoderSignal, setVoltageDekoderSignal] = React.useState(initialData?.powerConsumptionSignal?.voltageDekoderSignal || '');
            const [currentDekoderSignal, setCurrentDekoderSignal] = React.useState(initialData?.powerConsumptionSignal?.currentDekoderSignal || '');

            const decoderOptionsSignal = [
                { value: 'decoderG', label: 'Dekodér G (Návestidlá)' },
                { value: 'decoderH', label: 'Dekodér H (Funkčný)' },
                { value: 'none', label: 'Žiadny dekodér' },
            ];

            const [figureType, setFigureType] = React.useState(initialData?.figureType || '');
            const [figureQuantity, setFigureQuantity] = React.useState(initialData?.figureQuantity || '');
            const [figureNotes, setFigureNotes] = React.useState(initialData?.figureNotes || '');

            const [lightingType, setLightingType] = React.useState(initialData?.lightingType || '');
            const [lightingPower, setLightingPower] = React.useState(initialData?.lightingPower || '');
            const [lightingColor, setLightingColor] = React.useState(initialData?.lightingColor || '');
            const [lightingNotes, setLightingNotes] = React.useState(initialData?.lightingNotes || '');
            const [voltageLighting, setVoltageLighting] = React.useState(initialData?.powerConsumptionLighting?.voltageLighting || '');
            const [currentLighting, setCurrentLighting] = React.useState(initialData?.powerConsumptionLighting?.currentLighting || '');

            const [lastServiceDatePrislusenstvo, setLastServiceDatePrislusenstvo] = React.useState(initialData?.serviceHistoryPrislusenstvo?.lastServiceDatePrislusenstvo || '');
            const [serviceDescriptionPrislusenstvo, setServiceDescriptionPrislusenstvo] = React.useState(initialData?.serviceHistoryPrislusenstvo?.serviceDescriptionPrislusenstvo || '');
            const [serviceCostPrislusenstvo, setServiceCostPrislusenstvo] = React.useState(initialData?.serviceHistoryPrislusenstvo?.serviceCostPrislusenstvo || '');
            const [servicedByPrislusenstvo, setServicedByPrislusenstvo] = React.useState(initialData?.serviceHistoryPrislusenstvo?.servicedByPrislusenstvo || '');

            const [lastModificationDatePrislusenstvo, setLastModificationDatePrislusenstvo] = React.useState(initialData?.modificationsPrislusenstvo?.lastModificationDatePrislusenstvo || '');
            const [modificationDescriptionPrislusenstvo, setModificationDescriptionPrislusenstvo] = React.useState(initialData?.modificationsPrislusenstvo?.modificationDescriptionPrislusenstvo || '');
            const [modificationCostPrislusenstvo, setModificationCostPrislusenstvo] = React.useState(initialData?.modificationsPrislusenstvo?.modificationCostPrislusenstvo || '');

            const [location, setLocation] = React.useState(initialData?.location || '');
            const [packagingCondition, setPackagingCondition] = React.useState(initialData?.packagingCondition || '');
            const [conditionRating, setConditionRating] = React.useState(initialData?.conditionRating || '');
            const [modelAccessories, setModelAccessories] = React.useState(initialData?.modelAccessories || '');

            const [dccFunctionsPrislusenstvo, setDccFunctionsPrislusenstvo] = React.useState(initialData?.dccFunctionsPrislusenstvo || '');
            const [lastOperationDatePrislusenstvo, setLastOperationDatePrislusenstvo] = React.useState(initialData?.lastOperationPrislusenstvo?.date || '');
            const [operatingHoursPrislusenstvo, setOperatingHoursPrislusenstvo] = React.useState(initialData?.lastOperationPrislusenstvo?.hours || '');
            const [voltagePrislusenstvo, setVoltagePrislusenstvo] = React.useState(initialData?.powerConsumptionPrislusenstvo?.voltagePrislusenstvo || '');
            const [currentPrislusenstvo, setCurrentPrislusenstvo] = React.useState(initialData?.powerConsumptionPrislusenstvo?.currentPrislusenstvo || '');

            // Dynamické možnosti z allReferenceData
            const manufacturerOptions = allReferenceData.manufacturers || [];
            const scaleOptions = allReferenceData.scales || [];
            const obchodnikOptions = allReferenceData.dealers || [];
            const packagingConditionOptions = allReferenceData.packagingConditions || [];
            const conditionRatingOptions = allReferenceData.conditionRatings || [];
            const carBrandOptions = allReferenceData.carBrands || [];
            const carConditionOptions = allReferenceData.carConditions || [];
            const buildingTypeOptions = allReferenceData.buildingTypes || [];
            const buildingMaterialOptions = allReferenceData.buildingMaterials || [];
            const trackTypeOptions = allReferenceData.trackTypes || [];
            const trackLengthRadiusOptions = allReferenceData.currentTrackLengthRadius || []; // Corrected to currentTrackLengthRadius
            const trackMaterialOptions = allReferenceData.trackMaterials || [];
            const trackSystemOptions = allReferenceData.trackSystems || [];
            const signalCommunicationOptions = allReferenceData.signalCommunications || [];
            const signalTypeOptions = allReferenceData.signalTypes || [];
            const signalKindOptions = allReferenceData.signalKinds || [];
            const figureTypeOptions = allReferenceData.figureTypes || [];
            const lightingTypeOptions = allReferenceData.lightingTypes || [];
            const rozhranieDekoderOptions = allReferenceData.decoderInterfaces || [];
            const typDekoderOptions = allReferenceData.dataDecoderTypes || []; // Changed to dataDecoderTypes
            const vyrobcaDekoderOptions = allReferenceData.decoderManufacturers || [];

            React.useEffect(() => {
                setModelName(initialData?.modelName || '');
                setSubCategory(initialData?.subCategory || '');
                setManufacturer(initialData?.manufacturer || '');
                setScale(initialData?.scale || '');
                setDatumZakupeniaModelu(initialData?.datumZakupeniaModelu || '');
                setCenaModelu(initialData?.cenaModelu || '');
                setObchodnikModelu(initialData?.obchodnikModelu || '');
                setZarukaModelu(initialData?.zarukaModelu || '');
                setPopis(initialData?.popis || '');
                setImagePreviewUrl(initialData?.imageDataUrl || '');
                setImageFile(null);

                setEvidencneCisloAuto(initialData?.evidencneCisloAuto || '');
                setStavAuto(initialData?.stavAuto || '');
                setZnackaAuto(initialData?.znackaAuto || '');
                setZvukAuto(initialData?.zvukAuto || false);
                setOsvetlenieAuto(initialData?.osvetlenieAuto || false);
                setSelectedDecoderIdAuto(initialData?.selectedDecoderIdAuto || '');
                setCvNotesAuto(initialData?.cvNotesAuto || '');
                setDatumZakupeniaDekoderAuto(initialData?.datumZakupeniaDekoderAuto || '');
                setCenaDekoderAuto(initialData?.cenaDekoderAuto || '');
                setObchodnikDekoderAuto(initialData?.obchodnikDekoderAuto || '');
                setCvAdresaDekoderAuto(initialData?.cvAdresaDekoderAuto || '');
                setDecoderNotesAuto(initialData?.decoderNotesAuto || '');
                setVyrobcaDekoderAuto(initialData?.vyrobcaDekoderAuto || '');
                setDccFunctionsAuto(initialData?.dccFunctionsAuto || '');
                setLastOperationDateAuto(initialData?.lastOperationAuto?.date || '');
                setOperatingHoursAuto(initialData?.lastOperationAuto?.hours || '');
                setVoltageDekoderAuto(initialData?.powerConsumptionAuto?.voltageDekoderAuto || '');
                setCurrentDekoderAuto(initialData?.powerConsumptionAuto?.currentDekoderAuto || '');

                setBuildingType(initialData?.buildingType || '');
                setPatina(initialData?.patina || false);
                setBuildingLength(initialData?.buildingLength || '');
                setBuildingWidth(initialData?.buildingWidth || '');
                setBuildingHeight(initialData?.buildingHeight || '');
                setBuildingMaterial(initialData?.buildingMaterial || '');
                setBuildingNotes(initialData?.buildingNotes || '');
                setSelectedDecoderIdBuilding(initialData?.selectedDecoderIdBuilding || '');
                setRozhranieDekoderBuilding(initialData?.rozhranieDekoderBuilding || '');
                setTypDekoderBuilding(initialData?.typDekoderBuilding || '');
                setVyrobcaDekoderBuilding(initialData?.vyrobcaDekoderBuilding || '');
                setAdresaDekoderBuilding(initialData?.adresaDekoderBuilding || '');
                setDatumZakupeniaDekoderBuilding(initialData?.datumZakupeniaDekoderBuilding || '');
                setCenaDekoderBuilding(initialData?.cenaDekoderBuilding || '');
                setObchodnikDekoderBuilding(initialData?.obchodnikDekoderBuilding || '');
                setZarukaDekoderBuilding(initialData?.zarukaDekoderBuilding || '');
                setCvNotesBuilding(initialData?.cvNotesBuilding || '');
                setDccFunctionsBuilding(initialData?.dccFunctionsBuilding || '');
                setLastOperationDateBuilding(initialData?.lastOperationBuilding?.date || '');
                setOperatingHoursBuilding(initialData?.operatingHoursBuilding || '');
                setVoltageDekoderBuilding(initialData?.powerConsumptionBuilding?.voltageDekoderBuilding || '');
                setCurrentDekoderBuilding(initialData?.powerConsumptionBuilding?.currentDekoderBuilding || '');

                setTrackType(initialData?.trackType || '');
                setTrackLengthRadius(initialData?.trackLengthRadius || '');
                setTrackMaterial(initialData?.trackMaterial || '');
                setTrackSystem(initialData?.trackSystem || '');
                setTrackNotes(initialData?.trackNotes || '');
                setPocetKolajnic(initialData?.pocetKolajnic || '');

                setKomunikaciaSignal(initialData?.komunikaciaSignal || '');
                setSignalType(initialData?.signalType || '');
                setSignalKind(initialData?.signalKind || '');
                setPocetSvetielSignal(initialData?.pocetSvetielSignal || '');
                setSignalNotes(initialData?.signalNotes || '');
                setSelectedDecoderIdSignal(initialData?.selectedDecoderIdSignal || '');
                setRozhranieDekoderSignal(initialData?.rozhranieDekoderSignal || '');
                setTypDekoderSignal(initialData?.typDekoderSignal || '');
                setVyrobcaDekoderSignal(initialData?.vyrobcaDekoderSignal || '');
                setAdresaDekoderSignal(initialData?.adresaDekoderSignal || '');
                setDatumZakupeniaDekoderSignal(initialData?.datumZakupeniaDekoderSignal || '');
                setCenaDekoderSignal(initialData?.cenaDekoderSignal || '');
                setObchodnikDekoderSignal(initialData?.obchodnikDekoderSignal || '');
                setZarukaDekoderSignal(initialData?.zarukaDekoderSignal || '');
                setCvNotesSignal(initialData?.cvNotesSignal || '');
                setDccFunctionsSignal(initialData?.dccFunctionsSignal || '');
                setLastOperationDateSignal(initialData?.lastOperationSignal?.date || '');
                setOperatingHoursSignal(initialData?.lastOperationSignal?.hours || '');
                setVoltageDekoderSignal(initialData?.powerConsumptionSignal?.voltageDekoderSignal || '');
                setCurrentDekoderSignal(initialData?.powerConsumptionSignal?.currentDekoderSignal || '');

                setFigureType(initialData?.figureType || '');
                setFigureQuantity(initialData?.figureQuantity || '');
                setFigureNotes(initialData?.figureNotes || '');

                setLightingType(initialData?.lightingType || '');
                setLightingPower(initialData?.lightingPower || '');
                setLightingColor(initialData?.lightingColor || '');
                setLightingNotes(initialData?.lightingNotes || '');
                setVoltageLighting(initialData?.powerConsumptionLighting?.voltageLighting || '');
                setCurrentLighting(initialData?.powerConsumptionLighting?.currentLighting || '');

                setLastServiceDatePrislusenstvo(initialData?.serviceHistoryPrislusenstvo?.lastServiceDatePrislusenstvo || '');
                setServiceDescriptionPrislusenstvo(initialData?.serviceHistoryPrislusenstvo?.serviceDescriptionPrislusenstvo || '');
                setServiceCostPrislusenstvo(initialData?.serviceHistoryPrislusenstvo?.serviceCostPrislusenstvo || '');
                setServicedByPrislusenstvo(initialData?.serviceHistoryPrislusenstvo?.servicedByPrislusenstvo || '');

                setLastModificationDatePrislusenstvo(initialData?.modificationsPrislusenstvo?.lastModificationDatePrislusenstvo || '');
                setModificationDescriptionPrislusenstvo(initialData?.modificationsPrislusenstvo?.modificationDescriptionPrislusenstvo || '');
                setModificationCostPrislusenstvo(initialData?.modificationsPrislusenstvo?.modificationCostPrislusenstvo || '');

                setLocation(initialData?.location || '');
                setPackagingCondition(initialData?.packagingCondition || '');
                setConditionRating(initialData?.conditionRating || '');
                setModelAccessories(initialData?.modelAccessories || '');

                setDccFunctionsPrislusenstvo(initialData?.dccFunctionsPrislusenstvo || '');
                setLastOperationDatePrislusenstvo(initialData?.lastOperationPrislusenstvo?.date || '');
                setOperatingHoursPrislusenstvo(initialData?.lastOperationPrislusenstvo?.hours || '');
                setVoltagePrislusenstvo(initialData?.powerConsumptionPrislusenstvo?.voltagePrislusenstvo || '');
                setCurrentPrislusenstvo(initialData?.powerConsumptionPrislusenstvo?.currentPrislusenstvo || '');

            }, [initialData]);

            const handleImageChange = (file) => {
                if (!isEditMode) return;
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

            React.useImperativeHandle && React.useImperativeHandle(ref, () => ({
                getCurrentFormData: () => {
                    const commonData = {
                        modelName,
                        category: 'Príslušenstvo',
                        subCategory,
                        manufacturer,
                        scale,
                        datumZakupeniaModelu,
                        cenaModelu,
                        obchodnikModelu,
                        zarukaModelu,
                        popis,
                        imageFileName: imageFile ? imageFile.name : (initialData?.imageFileName || null),
                        imageDataUrl: imagePreviewUrl,
                        location,
                        packagingCondition,
                        conditionRating,
                        modelAccessories
                    };

                    let specificData = {};
                    switch (subCategory) {
                        case 'Autá':
                            specificData = {
                                evidencneCisloAuto,
                                stavAuto,
                                znackaAuto,
                                zvukAuto,
                                osvetlenieAuto,
                                selectedDecoderIdAuto,
                                cvNotesAuto,
                                datumZakupeniaDekoderAuto,
                                cenaDekoderAuto,
                                obchodnikDekoderAuto,
                                cvAdresaDekoderAuto,
                                decoderNotesAuto,
                                vyrobcaDekoderAuto,
                                dccFunctionsAuto,
                                lastOperationAuto: { date: lastOperationDateAuto, hours: operatingHoursAuto },
                                powerConsumptionAuto: { voltageDekoderAuto, currentDekoderAuto },
                                serviceHistoryPrislusenstvo: { lastServiceDatePrislusenstvo, serviceDescriptionPrislusenstvo, serviceCostPrislusenstvo, servicedByPrislusenstvo },
                                modificationsPrislusenstvo: { lastModificationDatePrislusenstvo, modificationDescriptionPrislusenstvo, modificationCostPrislusenstvo }
                            };
                            break;
                        case 'Budovy':
                            specificData = {
                                buildingType,
                                patina,
                                buildingLength,
                                buildingWidth,
                                buildingHeight,
                                buildingMaterial,
                                buildingNotes,
                                selectedDecoderIdBuilding,
                                rozhranieDekoderBuilding,
                                typDekoderBuilding,
                                vyrobcaDekoderBuilding,
                                adresaDekoderBuilding,
                                datumZakupeniaDekoderBuilding,
                                cenaDekoderBuilding,
                                obchodnikDekoderBuilding,
                                zarukaDekoderBuilding,
                                cvNotesBuilding,
                                dccFunctionsBuilding,
                                lastOperationBuilding: { date: lastOperationDateBuilding, hours: operatingHoursBuilding },
                                powerConsumptionBuilding: { voltageDekoderBuilding, currentDekoderBuilding },
                                serviceHistoryPrislusenstvo: { lastServiceDatePrislusenstvo, serviceDescriptionPrislusenstvo, serviceCostPrislusenstvo, servicedByPrislusenstvo },
                                modificationsPrislusenstvo: { lastModificationDatePrislusenstvo, modificationDescriptionPrislusenstvo, modificationCostPrislusenstvo }
                            };
                            break;
                        case 'Koľaje':
                            specificData = {
                                trackType, trackLengthRadius, trackMaterial, trackSystem, trackNotes, pocetKolajnic,
                                serviceHistoryPrislusenstvo: { lastServiceDatePrislusenstvo, serviceDescriptionPrislusenstvo, serviceCostPrislusenstvo, servicedByPrislusenstvo },
                                modificationsPrislusenstvo: { lastModificationDatePrislusenstvo, modificationDescriptionPrislusenstvo, modificationCostPrislusenstvo }
                            };
                            break;
                        case 'Návestidlá':
                            specificData = {
                                komunikaciaSignal,
                                signalType,
                                signalKind,
                                pocetSvetielSignal,
                                signalNotes,
                                selectedDecoderIdSignal,
                                rozhranieDekoderSignal,
                                typDekoderSignal,
                                vyrobcaDekoderSignal,
                                adresaDekoderSignal,
                                datumZakupeniaDekoderSignal,
                                cenaDekoderSignal,
                                obchodnikDekoderSignal,
                                zarukaDekoderSignal,
                                cvNotesSignal,
                                dccFunctionsSignal,
                                lastOperationSignal: { date: lastOperationDateSignal, hours: operatingHoursSignal },
                                powerConsumptionSignal: { voltageDekoderSignal, currentDekoderSignal },
                                serviceHistoryPrislusenstvo: { lastServiceDatePrislusenstvo, serviceDescriptionPrislusenstvo, serviceCostPrislusenstvo, servicedByPrislusenstvo },
                                modificationsPrislusenstvo: { lastModificationDatePrislusenstvo, modificationDescriptionPrislusenstvo, modificationCostPrislusenstvo }
                            };
                            break;
                        case 'Figúrky':
                            specificData = { figureType, figureQuantity, figureNotes };
                            break;
                        case 'Osvetlenie':
                            specificData = {
                                lightingType, lightingPower, lightingColor, lightingNotes,
                                powerConsumptionLighting: { voltageLighting, currentLighting }
                            };
                            break;
                        case 'Iné':
                            specificData = {
                                otherNotes: popis,
                                dccFunctionsPrislusenstvo,
                                lastOperationPrislusenstvo: { date: lastOperationDatePrislusenstvo, hours: operatingHoursPrislusenstvo },
                                powerConsumptionPrislusenstvo: { voltagePrislusenstvo, currentPrislusenstvo },
                                serviceHistoryPrislusenstvo: { lastServiceDatePrislusenstvo, serviceDescriptionPrislusenstvo, serviceCostPrislusenstvo, servicedByPrislusenstvo },
                                modificationsPrislusenstvo: { lastModificationDatePrislusenstvo, modificationDescriptionPrislusenstvo, modificationCostPrislusenstvo }
                            };
                            break;
                        default:
                            break;
                    }
                    return { ...commonData, ...specificData };
                },
            }));

            return (
                <div className="bg-white p-8 rounded-xl shadow-lg border border-blue-100">
                    <h1 className="text-3xl font-bold text-blue-800 mb-6">{isEditMode ? (initialData ? 'Upraviť príslušenstvo' : 'Pridať nové príslušenstvo') : 'Príslušenstvo'}</h1>

                    <div className="flex border-b border-blue-200 mb-6">
                        <button
                            type="button"
                            onClick={() => setActiveTab('general')}
                            className={`py-2 px-4 text-lg font-medium ${activeTab === 'general' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            Všeobecné
                        </button>
                        <button
                            type="button"
                            onClick={() => setActiveTab('technical')}
                            className={`py-2 px-4 text-lg font-medium ${activeTab === 'technical' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            Technické
                        </button>
                        {subCategory && (subCategory === 'Autá' || subCategory === 'Budovy' || subCategory === 'Návestidlá') && (
                            <button
                                type="button"
                                onClick={() => setActiveTab('decoder')}
                                className={`py-2 px-4 text-lg font-medium ${activeTab === 'decoder' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                            >
                                Dekodér
                            </button>
                        )}
                        {subCategory && (subCategory === 'Autá' || subCategory === 'Budovy' || subCategory === 'Koľaje' || subCategory === 'Návestidlá' || subCategory === 'Iné') && (
                            <button
                                type="button"
                                onClick={() => setActiveTab('maintenance')}
                                className={`py-2 px-4 text-lg font-medium ${activeTab === 'maintenance' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                            >
                                Údržba
                            </button>
                        )}
                        <button
                            type="button"
                            onClick={() => setActiveTab('additional')}
                            className={`py-2 px-4 text-lg font-medium ${activeTab === 'additional' ? 'border-b-2 border-blue-600 text-blue-800' : 'text-gray-600 hover:text-blue-800'}`}
                        >
                            Doplnkové
                        </button>
                    </div>

                    {activeTab === 'general' && (
                        <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 mb-6">
                            <h2 className="text-xl font-semibold text-blue-700 mb-4">Základné údaje príslušenstva</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="md:col-span-1 md:row-span-full flex flex-col items-center justify-start p-4 border border-gray-300 rounded-md bg-white min-h-[250px] relative">
                                    <div className="image-preview-container">
                                        {imagePreviewUrl ? (
                                            <img src={imagePreviewUrl} alt="Náhľad obrázka" className="max-w-full max-h-full object-contain" />
                                        ) : (
                                            <div className="image-preview-placeholder">
                                                Žiadny obrázok k dispozícii
                                            </div>
                                        )}
                                    </div>
                                    <div className="w-full px-2 mt-4">
                                        <LabeledInput label="Nahrať obrázok" id="imagePrislusenstvo" type="file" onChange={handleImageChange} readOnly={!isEditMode} />
                                    </div>
                                </div>

                                <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                                    
                                    <LabeledInput
                                        label="Typ príslušenstva"
                                        id="subCategoryPrislusenstvo"
                                        type="select"
                                        value={subCategory}
                                        onChange={(e) => setSubCategory(e.target.value)}
                                        options={["Autá", "Budovy", "Koľaje", "Návestidlá", "Figúrky", "Osvetlenie", "Iné"]} // Keep hardcoded as these are main categories
                                        required
                                        readOnly={!isEditMode}
                                    />
                                  <LabeledInput label="Názov príslušenstva" id="modelNamePrislusenstvo" value={modelName} onChange={(e) => setModelName(e.target.value)} placeholder="Auto Škoda 120" required readOnly={!isEditMode} />
                                    <LabeledInput label="Výrobca" id="manufacturerPrislusenstvo" type="select" value={manufacturer} onChange={(e) => setManufacturer(e.target.value)} options={manufacturerOptions} required readOnly={!isEditMode} />
                                    <LabeledInput label="Mierka" id="scalePrislusenstvo" type="select" value={scale} onChange={(e) => setScale(e.target.value)} options={scaleOptions} required readOnly={!isEditMode} />
                                    {subCategory === 'Autá' && (
                                        <React.Fragment>
                                            <LabeledInput label="Ev. číslo modelu" id="evidencneCisloAuto" value={evidencneCisloAuto} onChange={(e) => setEvidencneCisloAuto(e.target.value)} placeholder="Určí užívateľ" readOnly={!isEditMode} />
                                            <LabeledInput label="Stav" id="stavAuto" type="select" value={stavAuto} onChange={(e) => setStavAuto(e.target.value)} options={carConditionOptions} readOnly={!isEditMode} />
                                        </React.Fragment>
                                    )}
                                    <LabeledInput label="Popis:" id="popisPrislusenstvo" type="textarea" value={popis} onChange={(e) => setPopis(e.target.value)} placeholder="Ďalšie informácie o príslušenstve..." readOnly={!isEditMode} spanFull={true} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'technical' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {(() => {
                                switch (subCategory) {
                                    case 'Autá':
                                        return (
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                <LabeledInput label="Značka" id="znackaAuto" value={znackaAuto} onChange={(e) => setZnackaAuto(e.target.value)} placeholder="Škoda" options={carBrandOptions} readOnly={!isEditMode} />
                                                <LabeledCheckbox label="Zvuk" id="zvukAuto" checked={zvukAuto} onChange={(e) => setZvukAuto(e.target.checked)} readOnly={!isEditMode} />
                                                <LabeledCheckbox label="Osvetlenie" id="osvetlenieAuto" checked={osvetlenieAuto} onChange={(e) => setOsvetlenieAuto(e.target.checked)} readOnly={!isEditMode} />
                                            </div>
                                        );
                                    case 'Budovy':
                                        return (
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                                    <LabeledInput label="Druh budovy" id="buildingType" type="text" value={buildingType} onChange={(e) => setBuildingType(e.target.value)} placeholder="Staničná budova" options={buildingTypeOptions} required readOnly={!isEditMode} />
                                                    <LabeledCheckbox label="Patina" id="patina" checked={patina} onChange={(e) => setPatina(e.target.checked)} readOnly={!isEditMode} />
                                                    <LabeledInput label="Dĺžka (mm)" id="buildingLength" type="number" value={buildingLength} onChange={(e) => setBuildingLength(e.target.value)} placeholder="200" readOnly={!isEditMode} />
                                                    <LabeledInput label="Šírka (mm)" id="buildingWidth" type="number" value={buildingWidth} onChange={(e) => setBuildingWidth(e.target.value)} placeholder="150" readOnly={!isEditMode} />
                                                    <LabeledInput label="Výška (mm)" id="buildingHeight" type="number" value={buildingHeight} onChange={(e) => setBuildingHeight(e.target.value)} placeholder="100" readOnly={!isEditMode} />
                                                    <LabeledInput label="Materiál" id="buildingMaterial" type="select" value={buildingMaterial} onChange={(e) => setBuildingMaterial(e.target.value)} options={buildingMaterialOptions} readOnly={!isEditMode} />
                                                    <LabeledInput label="Poznámky k budove:" id="buildingNotes" type="textarea" value={buildingNotes} onChange={(e) => setBuildingNotes(e.target.value)} placeholder="Ďalšie informácie o budove..." readOnly={!isEditMode} spanFull={true} />
                                                </div>
                                            </div>
                                        );
                                    case 'Koľaje':
                                        return (
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                                                    <LabeledInput label="Typ koľaje" id="trackType" type="select" value={trackType} onChange={(e) => setTrackType(e.target.value)} options={trackTypeOptions} required readOnly={!isEditMode} />
                                                    <LabeledInput label="Dĺžka/Polomer (mm)" id="trackLengthRadius" type="select" value={trackLengthRadius} onChange={(e) => setTrackLengthRadius(e.target.value)} options={trackLengthRadiusOptions} placeholder="230 mm / R1" readOnly={!isEditMode} />
                                                    <LabeledInput label="Materiál" id="trackMaterial" type="select" value={trackMaterial} onChange={(e) => setTrackMaterial(e.target.value)} options={trackMaterialOptions} readOnly={!isEditMode} />
                                                    <LabeledInput label="Systém" id="trackSystem" type="select" value={trackSystem} onChange={(e) => setTrackSystem(e.target.value)} options={trackSystemOptions} readOnly={!isEditMode} />
                                                    <LabeledInput label="Počet" id="pocetKolajnic" type="number" value={pocetKolajnic} onChange={(e) => setPocetKolajnic(parseInt(e.target.value) || '')} min="1" required readOnly={!isEditMode} />
                                                    <LabeledInput label="Poznámky ku koľaji:" id="trackNotes" type="textarea" value={trackNotes} onChange={(e) => setTrackNotes(e.target.value)} placeholder="Špecifické detaily o koľaji..." readOnly={!isEditMode} spanFull={true} />
                                                </div>
                                            </div>
                                        );
                                    case 'Návestidlá':
                                        return (
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                    <LabeledInput label="Komunikácia" id="komunikaciaSignal" type="select" value={komunikaciaSignal} onChange={(e) => setKomunikaciaSignal(e.target.value)} options={signalCommunicationOptions} required readOnly={!isEditMode} />
                                                    <LabeledInput label="Typ návestidla" id="signalType" type="select" value={signalType} onChange={(e) => setSignalType(e.target.value)} options={signalTypeOptions} required readOnly={!isEditMode} />
                                                    <LabeledInput label="Druh" id="signalKind" type="select" value={signalKind} onChange={(e) => setSignalKind(e.target.value)} options={signalKindOptions} required readOnly={!isEditMode} />
                                                    {signalType === 'Svetelné' && (
                                                        <LabeledInput label="Počet svetiel" id="pocetSvetielSignal" type="number" value={pocetSvetielSignal} onChange={(e) => setPocetSvetielSignal(parseInt(e.target.value) || '')} min="1" required readOnly={!isEditMode} />
                                                    )}
                                                    <LabeledInput label="Poznámka:" id="signalNotes" type="textarea" value={signalNotes} onChange={(e) => setSignalNotes(e.target.value)} placeholder="Ďalšie informácie o návestidle..." readOnly={!isEditMode} spanFull={true} />
                                                </div>
                                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3 items-center justify-center">
                                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Vizualizácia návestidla</h3>
                                                    <SignalVisualization signalType={signalType} pocetSvetiel={pocetSvetielSignal} signalKind={signalKind} isEditMode={isEditMode} />
                                                </div>
                                            </div>
                                        );
                                    case 'Figúrky':
                                        return (
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                                                    <LabeledInput label="Typ figúrky" id="figureType" type="select" value={figureType} onChange={(e) => setFigureType(e.target.value)} options={figureTypeOptions} required readOnly={!isEditMode} />
                                                    <LabeledInput label="Počet kusov" id="figureQuantity" type="number" value={figureQuantity} onChange={(e) => setFigureQuantity(e.target.value)} placeholder="10" readOnly={!isEditMode} />
                                                    <LabeledInput label="Poznámky k figúrke:" id="figureNotes" type="textarea" value={figureNotes} onChange={(e) => setFigureNotes(e.target.value)} placeholder="Ďalšie informácie o figúrke..." readOnly={!isEditMode} spanFull={true} />
                                                </div>
                                            </div>
                                        );
                                    case 'Osvetlenie':
                                        return (
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                <LabeledInput label="Typ osvetlenia" id="lightingType" type="select" value={lightingType} onChange={(e) => setLightingType(e.target.value)} options={lightingTypeOptions} required readOnly={!isEditMode} />
                                                <LabeledInput label="Výkon (V/mA)" id="lightingPower" value={lightingPower} onChange={(e) => setLightingPower(e.target.value)} placeholder="12V / 20mA" readOnly={!isEditMode} />
                                                <LabeledInput label="Farba svetla" id="lightingColor" type="text" value={lightingColor} onChange={(e) => setLightingColor(e.target.value)} placeholder="Teplá biela" readOnly={!isEditMode} />
                                                <LabeledInput label="Poznámky k osvetleniu:" id="lightingNotes" type="textarea" value={lightingNotes} onChange={(e) => setLightingNotes(e.target.value)} placeholder="Špecifické detaily o osvetlení..." readOnly={!isEditMode} spanFull={true} />
                                            </div>
                                        );
                                    case 'Iné':
                                        return (
                                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Technické údaje</h3>
                                                <LabeledInput label="Ďalšie poznámky:" id="otherNotes" type="textarea" value={popis} onChange={(e) => setPopis(e.target.value)} placeholder="Akékoľvek ďalšie informácie o príslušenstve..." readOnly={!isEditMode} spanFull={true} />
                                            </div>
                                        );
                                    default:
                                        return null;
                                }
                            })()}
                        </div>
                    )}

                    {activeTab === 'decoder' && (subCategory === 'Autá' || subCategory === 'Budovy' || subCategory === 'Návestidlá') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            {subCategory === 'Autá' && (
                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Údaje o dekodéri</h3>
                                    <LabeledInput
                                        label="Vyberte dekodér"
                                        id="selectedDecoderIdAuto"
                                        type="select"
                                        value={selectedDecoderIdAuto}
                                        onChange={(e) => setSelectedDecoderIdAuto(e.target.value)}
                                        options={decoderOptionsAuto}
                                        readOnly={!isEditMode}
                                    />
                                    {selectedDecoderIdAuto && selectedDecoderIdAuto !== 'none' && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                                            <LabeledInput label="Dátum zak." id="datumZakupeniaDekoderAuto" type="date" value={datumZakupeniaDekoderAuto} onChange={(e) => setDatumZakupeniaDekoderAuto(e.target.value)} readOnly={!isEditMode} />
                                            <LabeledInput label="Cena" id="cenaDekoderAuto" type="number" value={cenaDekoderAuto} onChange={(e) => setCenaDekoderAuto(e.target.value)} placeholder="30.00" step="0.01" readOnly={!isEditMode} />
                                            <LabeledInput label="Obchodník" id="obchodnikDekoderAuto" type="select" value={obchodnikDekoderAuto} onChange={(e) => setObchodnikDekoderAuto(e.target.value)} options={obchodnikOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="CV adresa dekodéra" id="cvAdresaDekoderAuto" value={cvAdresaDekoderAuto} onChange={(e) => setCvAdresaDekoderAuto(e.target.value)} placeholder="1" readOnly={!isEditMode} />
                                            <LabeledInput label="Výrobca" id="vyrobcaDekoderAuto" type="select" value={vyrobcaDekoderAuto} onChange={(e) => setVyrobcaDekoderAuto(e.target.value)} options={vyrobcaDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Poznámky k CV" id="cvNotesAuto" type="textarea" value={cvNotesAuto} onChange={(e) => setCvNotesAuto(e.target.value)} placeholder="Poznámky k CV nastaveniam..." readOnly={!isEditMode} spanFull={true} />
                                            <LabeledInput label="Poznámky k dekodéru:" id="decoderNotesAuto" type="textarea" value={decoderNotesAuto} onChange={(e) => setDecoderNotesAuto(e.target.value)} placeholder="Ďalšie poznámky k dekodéru auta..." readOnly={!isEditMode} spanFull={true} />
                                            <h3 className="text-lg font-semibold text-blue-600 mt-4 col-span-full">DCC funkcie (F0-F28)</h3>
                                            <LabeledInput label="Popis funkcií" id="dccFunctionsAuto" type="textarea" value={dccFunctionsAuto} onChange={(e) => setDccFunctionsAuto(e.target.value)} placeholder="F0: Svetlá, F1: Klaksón..." readOnly={!isEditMode} spanFull={true} />
                                        </div>
                                    )}
                                </div>
                            )}
                            {subCategory === 'Budovy' && (
                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Údaje o dekodéri</h3>
                                    <LabeledInput
                                        label="Vyberte dekodér"
                                        id="selectedDecoderIdBuilding"
                                        type="select"
                                        value={selectedDecoderIdBuilding}
                                        onChange={(e) => setSelectedDecoderIdBuilding(e.target.value)}
                                        options={decoderOptionsBuilding}
                                        readOnly={!isEditMode}
                                    />
                                    {selectedDecoderIdBuilding && selectedDecoderIdBuilding !== 'none' && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                                            <LabeledInput label="Rozhranie" id="rozhranieDekoderBuilding" type="select" value={rozhranieDekoderBuilding} onChange={(e) => setRozhranieDekoderBuilding(e.target.value)} options={rozhranieDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Typ" id="typDekoderBuilding" type="select" value={typDekoderBuilding} onChange={(e) => setTypDekoderBuilding(e.target.value)} options={typDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Výrobca" id="vyrobcaDekoderBuilding" type="select" value={vyrobcaDekoderBuilding} onChange={(e) => setVyrobcaDekoderBuilding(e.target.value)} options={vyrobcaDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Adresa" id="adresaDekoderBuilding" value={adresaDekoderBuilding} onChange={(e) => setAdresaDekoderBuilding(e.target.value)} placeholder="3" readOnly={!isEditMode} />
                                            <LabeledInput label="Dátum zak." id="datumZakupeniaDekoderBuilding" type="date" value={datumZakupeniaDekoderBuilding} onChange={(e) => setDatumZakupeniaDekoderBuilding(e.target.value)} readOnly={!isEditMode} />
                                            <LabeledInput label="Cena" id="cenaDekoderBuilding" type="number" value={cenaDekoderBuilding} onChange={(e) => setCenaDekoderBuilding(e.target.value)} placeholder="50.00" step="0.01" readOnly={!isEditMode} />
                                            <LabeledInput label="Obchodník" id="obchodnikDekoderBuilding" type="select" value={obchodnikDekoderBuilding} onChange={(e) => setObchodnikDekoderBuilding(e.target.value)} options={obchodnikOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Záruka do" id="zarukaDekoderBuilding" type="date" value={zarukaDekoderBuilding} onChange={(e) => setZarukaDekoderBuilding(e.target.value)} readOnly={!isEditMode} />
                                            <LabeledInput label="Poznámky k CV:" id="cvNotesBuilding" type="textarea" value={cvNotesBuilding} onChange={(e) => setCvNotesBuilding(e.target.value)} placeholder="Špecifické nastavenia, zvukové funkcie..." readOnly={!isEditMode} spanFull={true} />
                                            <h3 className="text-lg font-semibold text-blue-600 mt-4 col-span-full">DCC funkcie (F0-F28)</h3>
                                            <LabeledInput label="Popis funkcií" id="dccFunctionsBuilding" type="textarea" value={dccFunctionsBuilding} onChange={(e) => setDccFunctionsBuilding(e.target.value)} placeholder="F0: Osvetlenie, F1: Zvuk zvonu..." readOnly={!isEditMode} spanFull={true} />
                                        </div>
                                    )}
                                </div>
                            )}
                            {subCategory === 'Návestidlá' && (
                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">Údaje o dekodéri</h3>
                                    <LabeledInput
                                        label="Vyberte dekodér"
                                        id="selectedDecoderIdSignal"
                                        type="select"
                                        value={selectedDecoderIdSignal}
                                        onChange={(e) => setSelectedDecoderIdSignal(e.target.value)}
                                        options={decoderOptionsSignal}
                                        readOnly={!isEditMode}
                                    />
                                    {selectedDecoderIdSignal && selectedDecoderIdSignal !== 'none' && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mt-4">
                                            <LabeledInput label="Rozhranie" id="rozhranieDekoderSignal" type="select" value={rozhranieDekoderSignal} onChange={(e) => setRozhranieDekoderSignal(e.target.value)} options={rozhranieDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Typ" id="typDekoderSignal" type="select" value={typDekoderSignal} onChange={(e) => setTypDekoderSignal(e.target.value)} options={typDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Výrobca" id="vyrobcaDekoderSignal" type="select" value={vyrobcaDekoderSignal} onChange={(e) => setVyrobcaDekoderSignal(e.target.value)} options={vyrobcaDekoderOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Adresa" id="adresaDekoderSignal" value={adresaDekoderSignal} onChange={(e) => setAdresaDekoderSignal(e.target.value)} placeholder="3" readOnly={!isEditMode} />
                                            <LabeledInput label="Dátum zak." id="datumZakupeniaDekoderSignal" type="date" value={datumZakupeniaDekoderSignal} onChange={(e) => setDatumZakupeniaDekoderSignal(e.target.value)} readOnly={!isEditMode} />
                                            <LabeledInput label="Cena" id="cenaDekoderSignal" type="number" value={cenaDekoderSignal} onChange={(e) => setCenaDekoderSignal(e.target.value)} placeholder="50.00" step="0.01" readOnly={!isEditMode} />
                                            <LabeledInput label="Obchodník" id="obchodnikDekoderSignal" type="select" value={obchodnikDekoderSignal} onChange={(e) => setObchodnikDekoderSignal(e.target.value)} options={obchodnikOptions} readOnly={!isEditMode} />
                                            <LabeledInput label="Záruka do" id="zarukaDekoderSignal" type="date" value={zarukaDekoderSignal} onChange={(e) => setZarukaDekoderSignal(e.target.value)} readOnly={!isEditMode} />
                                            <LabeledInput label="Poznámky k CV:" id="cvNotesSignal" type="textarea" value={cvNotesSignal} onChange={(e) => setCvNotesSignal(e.target.value)} placeholder="Špecifické nastavenia, zvukové funkcie..." readOnly={!isEditMode} spanFull={true} />
                                            <h3 className="text-lg font-semibold text-blue-600 mt-4 col-span-full">DCC funkcie (F0-F28)</h3>
                                            <LabeledInput label="Popis funkcií" id="dccFunctionsSignal" type="textarea" value={dccFunctionsSignal} onChange={(e) => setDccFunctionsSignal(e.target.value)} placeholder="F0: Svetlá, F1: Zmena aspektu..." readOnly={!isEditMode} spanFull={true} />
                                        </div>
                                    )}
                                </div>
                            )}
                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200 flex flex-col gap-3">
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">Spotreba energie</h3>
                                {subCategory === 'Autá' && (
                                    <React.Fragment>
                                        <LabeledInput label="Napätie (V)" id="voltageDekoderAuto" type="number" value={voltageDekoderAuto} onChange={(e) => setVoltageDekoderAuto(e.target.value)} placeholder="12" step="0.1" readOnly={!isEditMode} />
                                        <LabeledInput label="Prúd (mA)" id="currentDekoderAuto" type="number" value={currentDekoderAuto} onChange={(e) => setCurrentDekoderAuto(e.target.value)} placeholder="50" step="1" readOnly={!isEditMode} />
                                    </React.Fragment>
                                )}
                                {subCategory === 'Budovy' && (
                                    <React.Fragment>
                                        <LabeledInput label="Napätie (V)" id="voltageDekoderBuilding" type="number" value={voltageDekoderBuilding} onChange={(e) => setVoltageDekoderBuilding(e.target.value)} placeholder="12" step="0.1" readOnly={!isEditMode} />
                                        <LabeledInput label="Prúd (mA)" id="currentDekoderBuilding" type="number" value={currentDekoderBuilding} onChange={(e) => setCurrentDekoderBuilding(e.target.value)} placeholder="100" step="1" readOnly={!isEditMode} />
                                    </React.Fragment>
                                )}
                                {subCategory === 'Návestidlá' && (
                                    <React.Fragment>
                                        <LabeledInput label="Napätie (V)" id="voltageDekoderSignal" type="number" value={voltageDekoderSignal} onChange={(e) => setVoltageDekoderSignal(e.target.value)} placeholder="12" step="0.1" readOnly={!isEditMode} />
                                        <LabeledInput label="Prúd (mA)" id="currentDekoderSignal" type="number" value={currentDekoderSignal} onChange={(e) => setCurrentDekoderSignal(e.target.value)} placeholder="50" step="1" readOnly={!isEditMode} />
                                    </React.Fragment>
                                )}
                                {subCategory === 'Osvetlenie' && (
                                    <React.Fragment>
                                        <LabeledInput label="Napätie (V)" id="voltageLighting" type="number" value={voltageLighting} onChange={(e) => setVoltageLighting(e.target.value)} placeholder="12" step="0.1" readOnly={!isEditMode} />
                                        <LabeledInput label="Prúd (mA)" id="currentLighting" type="number" value={currentLighting} onChange={(e) => setCurrentLighting(e.target.value)} placeholder="20" step="1" readOnly={!isEditMode} />
                                    </React.Fragment>
                                )}
                                {subCategory === 'Iné' && (
                                    <React.Fragment>
                                        <LabeledInput label="Napätie (V)" id="voltagePrislusenstvo" type="number" value={voltagePrislusenstvo} onChange={(e) => setVoltagePrislusenstvo(e.target.value)} placeholder="12" step="0.1" readOnly={!isEditMode} />
                                        <LabeledInput label="Prúd (mA)" id="currentPrislusenstvo" type="number" value={currentPrislusenstvo} onChange={(e) => setCurrentPrislusenstvo(e.target.value)} placeholder="50" step="1" readOnly={!isEditMode} />
                                    </React.Fragment>
                                )}
                            </div>
                        </div>
                    )}

                    {activeTab === 'maintenance' && (subCategory === 'Autá' || subCategory === 'Budovy' || subCategory === 'Koľaje' || subCategory === 'Návestidlá' || subCategory === 'Iné') && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                <h2 className="text-xl font-semibold text-blue-700 mb-4">Servis a údržba</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-3">
                                    <LabeledInput label="Dátum posledného servisu" id="lastServiceDatePrislusenstvo" type="date" value={lastServiceDatePrislusenstvo} onChange={(e) => setLastServiceDatePrislusenstvo(e.target.value)} readOnly={!isEditMode} />
                                    <LabeledInput label="Náklady na servis (€)" id="serviceCostPrislusenstvo" type="number" value={serviceCostPrislusenstvo} onChange={(e) => setServiceCostPrislusenstvo(e.target.value)} placeholder="0.00" step="0.01" readOnly={!isEditMode} />
                                    <LabeledInput label="Servis vykonal" id="servicedByPrislusenstvo" type="text" value={servicedByPrislusenstvo} onChange={(e) => setServicedByPrislusenstvo(e.target.value)} placeholder="Meno / Firma" readOnly={!isEditMode} />
                                    <LabeledInput label="Popis vykonaných prác" id="serviceDescriptionPrislusenstvo" type="textarea" value={serviceDescriptionPrislusenstvo} onChange={(e) => setServiceDescriptionPrislusenstvo(e.target.value)} placeholder="Popis čistenia, mazania, výmeny súčiastok..." readOnly={!isEditMode} spanFull={true} />
                                </div>
                            </div>
                            <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                <h2 className="text-xl font-semibold text-blue-700 mb-4">Modifikácie a úpravy</h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                    <LabeledInput label="Dátum modifikácie" id="lastModificationDatePrislusenstvo" type="date" value={lastModificationDatePrislusenstvo} onChange={(e) => setLastModificationDatePrislusenstvo(e.target.value)} readOnly={!isEditMode} />
                                    <LabeledInput label="Náklady na modifikáciu (€)" id="modificationCostPrislusenstvo" type="number" value={modificationCostPrislusenstvo} onChange={(e) => setModificationCostPrislusenstvo(e.target.value)} placeholder="0.00" step="0.01" readOnly={!isEditMode} />
                                    <LabeledInput label="Popis vykonanej úpravy" id="modificationDescriptionPrislusenstvo" type="textarea" value={modificationDescriptionPrislusenstvo} onChange={(e) => setModificationDescriptionPrislusenstvo(e.target.value)} placeholder="Digitálne spriahlo, osvetlenie, patinovanie, zmena zvuku..." readOnly={!isEditMode} spanFull={true} />
                                </div>
                            </div>
                        </div>
                    )}

                    {activeTab === 'additional' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        
                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                    <h2 className="text-xl font-semibold text-blue-700 mb-4">Ďalšie informácie</h2>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3">
                                        <LabeledInput label="Dátum zak." id="datumZakupeniaModeluPrislusenstvo" type="date" value={datumZakupeniaModelu} onChange={(e) => setDatumZakupeniaModelu(e.target.value)} readOnly={!isEditMode} />
                                        <LabeledInput label="Cena" id="cenaModeluPrislusenstvo" type="number" value={cenaModelu} onChange={(e) => setCenaModelu(e.target.value)} placeholder="15.00" step="0.01" readOnly={!isEditMode} />
                                        <LabeledInput label="Obchodník" id="obchodnikModeluPrislusenstvo" type="select" value={obchodnikModelu} onChange={(e) => setObchodnikModelu(e.target.value)} options={obchodnikOptions} readOnly={!isEditMode} />
                                        <LabeledInput label="Záruka do" id="zarukaModeluPrislusenstvo" type="date" value={zarukaModelu} onChange={(e) => setZarukaModelu(e.target.value)} readOnly={!isEditMode} />
                                        <LabeledInput label="Umiestnenie" id="locationPrislusenstvo" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="na koľajisku" readOnly={!isEditMode} />
                                        <LabeledInput label="Stav obalu" id="packagingConditionPrislusenstvo" type="select" value={packagingCondition} onChange={(e) => setPackagingCondition(e.target.value)} options={packagingConditionOptions} readOnly={!isEditMode} />
                                        <LabeledInput label="Hodnotenie stavu" id="conditionRatingPrislusenstvo" type="select" value={conditionRating} onChange={(e) => setConditionRating(e.target.value)} options={conditionRatingOptions} readOnly={!isEditMode} />
                                        <LabeledInput label="Príslušenstvo k modelu" id="modelAccessoriesPrislusenstvo" type="textarea" value={modelAccessories} onChange={(e) => setModelAccessories(e.target.value)} placeholder="Náhradné diely, spriahla, doplnky, originálne balenie..." readOnly={!isEditMode} spanFull={true} />
                                    </div>
                                </div>
                                <div className="bg-gray-50 p-4 rounded-lg shadow-inner border border-gray-200">
                                     <h2 className="text-xl font-semibold text-blue-700 mb-4">Doplnkové údaje</h2>
                                </div>
                        </div>
                    )}
                </div>
            );
        });