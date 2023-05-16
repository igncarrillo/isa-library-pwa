import './AuthorList.css';
import {IonContent, IonItem, IonLabel, IonList} from "@ionic/react";
import {useEffect, useState} from "react";
import {login} from "../commons/login";
import {basepath} from "../commons/configs";

export interface Author {
    id: number
    name: string
}

async function getAuthors() {
    const token = await login();

    const response = await fetch(basepath + '/authors', {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });

    if (!response.ok) {
        throw new Error('Failed to fetch authors list');
    }

    const authors = await response.json();
    return authors;
}

const AuthorList: React.FC = () => {
    const [authors, setAuthors] = useState<Author[]>([]);

    useEffect(() => {
        async function fetchAuthors() {
            try {
                const authors = await getAuthors();
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

