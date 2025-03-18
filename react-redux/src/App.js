import './App.css';
import { useDispatch, useSelector} from 'react-redux';
import { action } from './store';
import CategoriesComboBox from './components/CategoriesComboBox'
import Header from './components/header';
import { Stack } from '@mui/material';
import ItemTextField from './components/ItemTextField';
function App() {
  return (
    <div>
      <Header/>
      <Stack spacing={2} sx={{ padding: 2}} direction='row'>
      <CategoriesComboBox/>
      <ItemTextField/>
      </Stack>
     </div>
  );
}

export default App;
