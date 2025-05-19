import useDocumentTitle from "../hooks/useDocumentTitle";
import OffMetaLast24Hours from "../components/OffMeta/OffMeta"
export default function Meta() {
    useDocumentTitle('D2S - Dota 2 Meta Escape');
    return (
        <>
            <OffMetaLast24Hours />
        </>
    )
}
