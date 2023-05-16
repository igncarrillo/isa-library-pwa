import './BookList.css';
import {useEffect, useState} from "react";
import {login} from '../commons/login';
import {basepath} from "../commons/configs";
import {IonContent, IonIcon, IonItem, IonLabel, IonList} from "@ionic/react";
import {caretDown, caretUp} from "ionicons/icons";

interface Book {
    id: number;
    name: string;
    authors: string[];
    copies: number;
    publishYear: string;
}

async function getBooks() {
    const token = await login();

    const response = await fetch(basepath + '/books', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch book list');
    }

    const books = await response.json();
    return books;
}

const BookList: React.FC = () => {
    const [books, setBooks] = useState<Book[]>([]);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);

    const handleClick = (book: any) => {
        setSelectedBook(book.id === selectedBook?.id ? null : book);
    };

    useEffect(() => {
        async function fetchBooks() {
            try {
                const books = await getBooks();
                setBooks(books);
            } catch (error) {
                console.error(error);
            }
        }

        fetchBooks();
    }, []);

    return (
        <IonContent>
            <IonList lines="full" class="ion-padding">
                {books.map((book) => (
                    <IonItem key={book.id} button onClick={() => handleClick(book)}>
                        <IonLabel>{book.name}</IonLabel>
                        {selectedBook === book ? (
                            <IonIcon slot="end" icon={caretUp}/>
                        ) : (
                            <IonIcon slot="end" icon={caretDown}/>
                        )}
                        {selectedBook === book && (
                            <IonList inset slot={"helper"}>
                                <IonItem ><IonLabel color={"secondary"}>Copies: {book.copies}</IonLabel></IonItem>
                                <IonItem ><IonLabel color={"secondary"}>Published: {book.publishYear}</IonLabel></IonItem>
                                <IonItem ><IonLabel color={"secondary"}>Authors: {book.authors}</IonLabel></IonItem>
                            </IonList>
                        )}
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    )
};
export default BookList;
