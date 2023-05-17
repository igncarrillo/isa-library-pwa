import './BookList.css';
import {useEffect, useState} from "react";
import {getToken, login} from '../commons/login';
import {basepath} from "../commons/configs";
import {IonContent, IonIcon, IonItem, IonLabel, IonList} from "@ionic/react";
import {caretDown, caretUp} from "ionicons/icons";
import {Author} from "./AuthorList";
import {getEntity} from "../commons/entities";

interface Book {
    id: number;
    name: string;
    authors: Author[];
    copies: number;
    publishYear: string;
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
                const books = await getEntity('/books');
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
                                <IonItem><IonLabel
                                    color={"secondary"}>Copies: </IonLabel><IonLabel> {book.copies}</IonLabel></IonItem>
                                <IonItem><IonLabel
                                    color={"secondary"}>Published: </IonLabel><IonLabel> {book.publishYear}</IonLabel></IonItem>
                                <IonItem>
                                    <IonLabel color={"secondary"}>Authors:</IonLabel>
                                    {book.authors.map(author => (
                                        <IonLabel key={author.id} class="ion-text-wrap">{author.name}</IonLabel>
                                    ))}
                                </IonItem>
                            </IonList>
                        )}
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    )
};
export default BookList;
