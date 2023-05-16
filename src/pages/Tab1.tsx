import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import './Tab1.css';
import BookList from "../components/BookList";

const Tab1: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle color={"primary"}>Library Books</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent class="ion-padding">
                <BookList/>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;
