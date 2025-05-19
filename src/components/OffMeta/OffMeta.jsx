import "./OffMeta.scss"
import OffMeta24h from "../OffMeta24h/OffMeta24h"
export default function OffMetaLast24Hours(){
    return (
        <section className="offMeta container centered">
            <h1 className="offMeta__title">Discover Non-Standard Item Builds</h1>
            <OffMeta24h />
            
        </section>
    )
}