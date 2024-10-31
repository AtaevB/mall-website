import './selection.css';

const Selection = ({categories, defaultValue, onChange}) => {
    return ( <>
    
    <select onChange={onChange}
    defaultValue={defaultValue}
    >
    
    
    <option value={defaultValue} >Все категории</option>

        {categories.map((category, index) => (
            <option key={index} value={category}>{category}</option>
        ))}

    </select>

    </> );
}
 
export default Selection;