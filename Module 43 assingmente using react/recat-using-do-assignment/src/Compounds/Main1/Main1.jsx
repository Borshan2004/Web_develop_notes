import React, { useState } from 'react';
import Sub1 from './SubMain1/Sub1';
import Sub2 from './SubMain1/Sub2';

const Main1 = () => {

    const [savedItems, setSavedItems] = useState([]);

    const [likedItems, setLikedItems] = useState([]);

    const [isDisabled, setIsDisabled] = useState([]);

    const [calculatedTotal, setCalculatedTotal] = useState(0);

    // const [clicktedbtn, setClickedbtn] = useState();

    // if (savedItems.length > 0) {
    //     setClickedbtn(true);
    // }
    // useEffect(() => {
    //     if (savedItems.length > 0) {
    //         setClickedbtn(true);
    //     } else {
    //         setClickedbtn(false);
    //     }
    // }, [savedItems]);

    const [toast1, setToast1] = useState(false);
    const [toast2, setToast2] = useState(false);

    const showToast1 = () => {
        setToast1(true);
        setTimeout(() => {
            setToast1(false);
        }, 3000);
    };

    const showToast2 = () => {
        setToast2(true);
        setTimeout(() => {
            setToast2(false);
        }, 3000);
    };


    const EventHandaler = (items) => {

        setSavedItems([...savedItems, items]);

        changecolor(items);

        setIsDisabled([...isDisabled, items.id]);

        setCalculatedTotal(calculatedTotal => calculatedTotal + items.currentBidPrice);

        showToast1();


    }

    const RemoveEventHandaler = (id, saveitems) => {

        const remaining = savedItems.filter(itemid => itemid.id !== id);
        setSavedItems(remaining);

        const removecolor = likedItems.filter(itemid => itemid !== id);
        setLikedItems(removecolor);

        const removeDisable = isDisabled.filter(itemid => itemid !== id);
        setIsDisabled(removeDisable);

        setCalculatedTotal(calculatedTotal => calculatedTotal - saveitems.currentBidPrice);

        showToast2();


    }


    const changecolor = (items) => {

        //here finding for the liked items
        //         If the item is already liked:
        //         remove it from likedItems
        //         Else:
        //         add it to likedItems
        //setLikedItems((likedItems)=>likedItems.includes(items.id)?likedItems.filter(id=>id !== items.id):[...likedItems,items.id]);
        setLikedItems([...likedItems, items.id]);

    }



    return (
        <div className='bg-[#ebf0f5]'>



            <div className='mx-64 py-44'>

                <h1 className='text-4xl font-medium py-1'>Active Auctions</h1>
                <p className='py-2'>Discover and bid on extraordinary items</p>



                <div className='flex gap-10 py-1'>

                    <Sub1 EventHandaler={EventHandaler} colorchange={likedItems} className="w-[70%]" isDisabled={isDisabled} ></Sub1>
                    <Sub2 RemoveEventHandaler={RemoveEventHandaler} savedItems={savedItems} className="w-[30%]" calculatedTotal={calculatedTotal} ></Sub2>

                </div>

            </div>


            {
                toast1 && (<div className="toast toast-top toast-end">
                    <div className="alert alert-info">
                        <span>Item added to your favourite list</span>
                    </div>
                    
                </div>)
            }

            {
                toast2 && (<div className="toast toast-top toast-end">
                    <div className="alert alert-info">
                        <span>Item removed from your favourite list</span>
                    </div>
                    
                </div>)
            }

        </div>
    );
};

export default Main1;