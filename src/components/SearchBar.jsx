import TextFilter from './TextFilter';
import StatusFilter from './StatusFilter';

function SearchBar() {
    return (
        <div className="mt-4 d-flex">
            <TextFilter />
            <StatusFilter />
        </div>
    );
}

export default SearchBar;
