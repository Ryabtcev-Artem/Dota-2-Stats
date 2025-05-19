import "./RoleFilter.scss";
import pos1 from "../../assets/rolesImages/pos_1.webp";
import pos2 from "../../assets/rolesImages/pos_2.webp";
import pos3 from "../../assets/rolesImages/pos_3.webp";
import pos4 from "../../assets/rolesImages/pos_4.webp";
import pos5 from "../../assets/rolesImages/pos_5.webp";
export default function RoleFilter(props) {
    const { sortRoles, setSortRoles } = props;
    function onRoleClick(event) {
        const target = event.target.closest(".roles__button");
        const newRoleIndex = target.getAttribute("id");
        const updatedRoles = Array(6).fill("");
        updatedRoles[newRoleIndex] = "active";
        setSortRoles(updatedRoles);
    }
    return (
        <section className="roles container centered">
            <div className="roles-wrapper">
                <button
                    className={`roles__button ${sortRoles[0]}`}
                    id="0"
                    onClick={onRoleClick}
                >
                    <span>All</span>
                </button>
                <button
                    className={`roles__button ${sortRoles[1]}`}
                    id="1"
                    onClick={onRoleClick}
                >
                    <img height="20" width="20" src={pos1} alt="" />
                    <span>Carry</span>
                </button>
                <button
                    className={`roles__button ${sortRoles[2]}`}
                    id="2"
                    onClick={onRoleClick}
                >
                    <img height="20" width="20" src={pos2} alt="" />
                    <span>Mid</span>
                </button>
                <button
                    className={`roles__button ${sortRoles[3]}`}
                    id="3"
                    onClick={onRoleClick}
                >
                    <img height="20" width="20" src={pos3} alt="" />
                    <span>Off</span>
                </button>
                <button
                    className={`roles__button ${sortRoles[4]}`}
                    id="4"
                    onClick={onRoleClick}
                >
                    <img height="20" width="20" src={pos4} alt="" />
                    <span>Pos 4</span>
                </button>
                <button
                    className={`roles__button ${sortRoles[5]}`}
                    id="5"
                    onClick={onRoleClick}
                >
                    <img height="20" width="20" src={pos5} alt="" />
                    <span>Pos 5</span>
                </button>
            </div>
        </section>
    );
}
