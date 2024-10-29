import './search.css';

const Search = ({type, placeholder, value, onChange, className}) => {
    return ( <>
    
    <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
    />

    </> );
}
 
export default Search;