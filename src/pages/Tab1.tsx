import {IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import BookList from "../components/BookList";
import {useState} from "react";

const Tab1: React.FC = () => {
    const [reload, setReload] = useState(false);

    const handleReload = () => {
        setReload(!reload);
    };
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color={"primary"}>Library Books</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <BookList key={reload ? 'reload' : 'no-reload'}/>
            </IonContent>
            <IonButton color="secondary" onClick={handleReload}>Reload Books - Network First</IonButton>
        </IonPage>
    );
};

export default Tab1;
