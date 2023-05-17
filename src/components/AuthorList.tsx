import './AuthorList.css';
import {IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import {useEffect, useState} from "react";
import {getEntity} from "../commons/entities";

export interface Author {
    id: number
    name: string
}

const AuthorList: React.FC = () => {
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        async function fetchAuthors() {
            try {
                const authors = await getEntity('/authors');
                setAuthors(authors);
            } catch (error) {
                console.error(error);
            }
        }

        fetchAuthors();
    }, []);
    return (
        <IonContent>
            <IonList lines="full" class="ion-padding">
                {authors.map((author) => (
                    <IonItem key={author.id}>
                        <IonLabel>{author.name}</IonLabel>
                    </IonItem>
                ))}
            </IonList>
        </IonContent>
    )
}

export default AuthorList;

