import FilterList from "./FilterList"

function Sidebar (){
    return(
        <div style={{
            display:"flex",
            width: "400px",
            flexDirection: "column",
        }}
        >
            <FilterList/>
            <FilterList/>
            <FilterList/>
            <FilterList/>
            <FilterList/>
            <FilterList/>
            <FilterList/>
        </div>
    );
}

export default Sidebar