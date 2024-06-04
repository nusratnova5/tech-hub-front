import React from 'react';
import img1 from '../QuickTips/images/quick-tips.jpg';


const QuickTips = () => {
    return (
        <div className='my-20'>
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center">
            Tech Tidbits & Tweaks
           </h2>

            <div className="flex flex-wrap items-center mt-10 text-left ">
                <div className="w-full md:w-3/5 lg:w-1/2 px-4">
                    <img src={img1} alt="gem" className="inline-block rounded shadow-lg border border-merino-400" />
                </div>
                <div className="w-full md:w-2/5 lg:w-1/2 px-4 text-center md:text-left lg:pl-12">
                    <ul className='list-disc'>
                        <li>
                            <p>
                                <span className='font-bold'>Save Battery:</span> Lower screen brightness, close unused apps, and disable Wi-Fi and Bluetooth to conserve battery life.</p>
                        </li>
                        <li>
                            <p>
                            <span className='font-bold'>Speed Up Computer: </span> Delete unnecessary files, uninstall unused programs, and run disk cleanup to improve performance.</p>
                        </li>
                        <li>
                            <p>
                            <span className='font-bold'>Secure Wi-Fi: </span>  Change default passwords, enable encryption, and update router firmware to protect your network.</p>
                        </li>
                        <li>
                            <p>
                            <span className='font-bold'>Clean Devices: </span> Wipe screens with a microfiber cloth and use compressed air to remove dust from keyboards and ports.
                            </p>
                        </li>
                        <li>
                            <p>
                            <span className='font-bold'>Shortcuts: </span>Use  Learn keyboard shortcuts to navigate your computer faster and perform tasks more efficiently.
                            </p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default QuickTips;