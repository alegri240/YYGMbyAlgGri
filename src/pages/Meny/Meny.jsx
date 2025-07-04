import './Meny.css'
import logo from '/logo.png'
import { useGetMenuQuery } from '../../api/apiSlice';
import MiniCart from '../../components/MiniCart/MiniCart';
import CartItem from '../../components/CartItem/CartItem';
import CartItemOptions from '../../components/CartItemOptions/CartItemOptions';
import { groupItemsByPrice } from "./Meny";

function Meny() {
    const { data: menyData, isLoading, isError } = useGetMenuQuery();

    if (isLoading) return <p>Laddar...</p>;
    if (isError) return <p>Det gick inte att hämta menyn. Försök om en stund.</p>;

    const wontonList = menyData?.items
        .filter((w) => w.type === "wonton")
        .map((w) => {
            return <CartItem key={w.id} data={w} />
        });

    const dipByPrice = groupItemsByPrice(menyData?.items, "dip");
    const drinkByPrice = groupItemsByPrice(menyData?.items, "drink");

    const dipListGrp = Object.entries(dipByPrice).map(([price, items]) => (
        <CartItemOptions key={`dip-${price}`} items={items} price={price} name="DIPSÅS" />
    ));

    const drinkListGrp = Object.entries(drinkByPrice).map(([price, items]) => (
        <CartItemOptions key={`drink-${price}`} items={items} price={price} name="DRYCKER" />
    ));

    return (
        <>
            <div className="app-container">
                <div className="background-image"></div>
                <div className="logo">
                    <img src={logo} alt="logo" />
                </div>
                <MiniCart />
                <div className="menu-box">
                    <div className="menu-header">MENU</div>
                    <div className="menu-items">
                        {wontonList}
                        {dipListGrp}
                        {drinkListGrp}
                    </div>
                </div>

            </div>
        </>
    )
}

export default Meny;
