
import BookShopSection from "../../components/shoping/BookShopSection";
import { books } from "../../data/BookData";

import RegistrationContactForm from "../../components/shoping/RegistrationContactForm";

const BookShop = () => {
    return (
        <>
        
        <BookShopSection books={books} itemsPerPage={8}/>
        <RegistrationContactForm/>
        </>
    )
};
export default BookShop;