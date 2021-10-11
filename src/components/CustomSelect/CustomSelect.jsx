import Select from 'react-select';

import s from './CustomSelect.module.css';
import options from 'data/categories.json';

// const customStyles = {
//   control: (base, state) => ({
//     ...base,
//     width: 200,
//     height: 44,
//     border: '2px solid #F5F6FB',
//     background: '#FFFFFF',
//     // match with the menu
//     borderRadius: state.isFocused ? '0px 0px 0 0' : 0,
//     // Overwrittes the different states of border
//     borderColor: state.isFocused ? '#F5F6FB' : '#F5F6FB',
//     // Removes weird border around container
//     boxShadow: state.isFocused ? null : null,
//     '&:hover': {
//       // Overwrittes the different states of border
//       borderColor: state.isFocused ? '#F5F6FB' : '#F5F6FB',
//     },
//   }),
//   menuList: styles => ({
//     ...styles,
//     background: 'white',
//     color: '#C7CCDC',
//   }),
//   option: (styles, { isFocused, isSelected }) => ({
//     ...styles,
//     color: '#52555F',
//     background: isFocused ? 'orange' : isSelected ? '#FFFFFF' : undefined,
//     zIndex: 1,
//   }),
//   menu: base => ({
//     ...base,
//     margin: 0,
//     zIndex: 100,
//   }),
// };

function CustomSelect() {
  return (
    <div>
      <Select
        // styles={customStyles}
        options={options}
        placeholder="Категория товара"
        className={s.select}
        isSearchable
      />
    </div>
  );
}

export default CustomSelect;
