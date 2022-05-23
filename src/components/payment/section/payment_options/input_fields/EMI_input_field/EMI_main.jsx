import React from "react";
import Data from './data';


const EMIMain = ({handleActive}) => {
    return (
        <div className="rounded-2xl shadow-2 pt-9 px-5 md:px-8 pb-9 md:h-screen md:overflow-y-scroll">
        {Data.map(d => (
            <div>
                <div>
                    <div className="font-color-one my-7 text-lg font-medium ">Debit Card EMI</div>
                    {d.DebitCardEmi.map(dc => (
                            <div  onClick={ dc.active ? ()=> handleActive("AvailableEmi"):""} key={dc.id} className={ dc.active === false ? "cursor-pointer select-none flex justify-between w-full p-4 md:p-5 rounded-lg border border-gray-300 my-3" : "cursor-pointer flex justify-between w-full p-4 md:p-5 rounded-lg border border-gray-300 my-3"}>
                                <div className={dc.active === false ? "text-base text-gray-400" : "text-base"}>{dc.title }</div>
                                <div className={dc.active === false ? "text-gray-400 bg-gray-100 uppercase text-sm  p-2" : "uppercase text-sm text-green-600 bg-green-100 p-2"}>{dc.cost }</div>
                            </div>
                    ))}
                </div>

                <div>
                    <div className="font-color-one my-7 text-lg font-medium ">Cardless EMI</div>
                    {d.CardLessEmi.map(cl => (
                        <div onClick={ cl.active ? ()=>handleActive("AvailableEmi"):""} key={cl.id} className={ cl.active === false ? "cursor-pointer select-none flex justify-between w-full p-4 md:p-5 rounded-lg border border-gray-300 my-3" : "cursor-pointer flex justify-between w-full p-4 md:p-5 rounded-lg border border-gray-300 my-3"}>
                            <div className={cl.active === false ? "text-base text-gray-400" : "text-base"}>{cl.title }</div>
                            <div className={cl.active === false ? "text-gray-400 bg-gray-100 uppercase text-sm  p-2" : "uppercase text-sm text-green-600 bg-green-100 p-2"}>{cl.cost }</div>
                        </div>
                    ))}
                </div>

                <div>
                    <div className="font-color-one my-7 text-lg font-medium ">Credit Card EMI</div>
                    {d.CreditCardEmi.map(cc => (
                        <div onClick={ cc.active ? ()=>handleActive("AvailableEmi"):""} key={cc.id} className={ cc.active === false ? "select-none flex justify-between w-full p-4 md:p-5 rounded-lg border border-gray-300 my-3 cursor-pointer" : "cursor-pointer flex justify-between w-full p-4 md:p-5 rounded-lg border border-gray-300 my-3"}>
                            <div className={cc.active === false ? "text-base text-gray-400" : "text-base"}>{cc.title }</div>
                            <div className={cc.active === false ? "text-gray-400 bg-gray-100 uppercase text-sm  p-2" : "uppercase text-sm text-green-600 bg-green-100 p-2"}>{cc.cost }</div>
                        </div>
                    ))}
                </div>
            </div> 
        ))}
</div>
    )
}

export default EMIMain