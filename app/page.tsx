export default function Home() {
    return (
                <div className="flex items-center justify-center">
                    <div className="mx-10 flex items-center">
                        <a href="/accueil"><button className="bg-beige text">Bienvenue sur l'accueil</button></a>
                    </div>
                    <div className="mx-10 flex items-center">
                        <a href="/administration"><button className="bg-beige">Accès à l'administration</button></a>
                    </div>
                </div>
    );
  }