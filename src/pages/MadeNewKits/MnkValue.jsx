import { useNavigate } from 'react-router-dom';
import { useMnkStore } from '../../app/state/useMnkStore';

export default function MnkValue() {
    const navigate = useNavigate();
    const setSelectedKit = useMnkStore(state => state.setSelectedKit);

    const handleKitClick = (kit) => {
        setSelectedKit(kit);
        navigate('/mnkDelis');
    };

    const kits = [
        { name: 'Набор из 6 макарон', price: 350, totalQuantity: 6, image: '/Mnk/mnk.1.svg' },
        { name: 'Набор из 12 макарон', price: 700, totalQuantity: 12, image: '/Mnk/mnk.2.svg' },
        { name: 'Набор из 24 макарон', price: 1400, totalQuantity: 24, image: '/Mnk/mnk.3.svg' },
        { name: 'Набор из 48 макарон', price: 2800, totalQuantity: 48, image: '/Mnk/mnk.4.svg' },
        { name: 'Набор из 40 макарон', price: 3000, totalQuantity: 40, image: '/Mnk/mnk.5.svg' },
        { name: 'Набор из 70 макарон', price: 5000, totalQuantity: 70, image: '/Mnk/mnk.5.svg' },
    ];

    return (
        <div className="flex flex-col items-center gap-10 bg-[#F7F7F7] pt-10 pb-10">
          
            <div className="mt-5">
                <nav className="flex items-center text-sm text-gray-500 space-x-1">
                    <a href="/" className="hover:underline">Главная</a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-gray-500 hover:underline">
                        Собрать набор
                    </a>
                    <span>{'>'}</span>
                    <a href="/delivery" className="text-blue-500 hover:underline">
                        Выбрать количество
                    </a>
                </nav>
            </div>

        
            <div className="flex flex-col items-center gap-15">
                <div>
                    <h1 className="text-[30px] font-medium">Выберите количество</h1>
                </div>
                
                
                <div className="flex flex-col items-center gap-10">
                    
                    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
                        {kits.slice(0, 4).map(kit => (
                            <div
                                key={kit.name}
                                onClick={() => handleKitClick(kit)}
                                className="flex flex-col items-center bg-white w-full max-w-[270px] h-full cursor-pointer"
                            >
                                <div>
                                    <img src={kit.image} alt={kit.name} />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">{kit.name}</h1>
                                    <h1 className="text-red-500 ">{kit.price} руб.</h1>
                                </div>
                            </div>
                        ))}
                    </div>

                 
                    <div className="flex flex-col lg:flex-row items-center gap-5 lg:gap-10">
                        {kits.slice(4).map(kit => (
                            <div
                                key={kit.name}
                                onClick={() => handleKitClick(kit)}
                                className="flex flex-col items-center bg-white w-full max-w-[270px] h-full cursor-pointer"
                            >
                                <div>
                                    <img src={kit.image} alt={kit.name} />
                                </div>
                                <div className="flex flex-col items-center mb-5 gap-1">
                                    <h1 className="font-medium">{kit.name}</h1>
                                    <h1 className="text-red-500 ">{kit.price} руб.</h1>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}