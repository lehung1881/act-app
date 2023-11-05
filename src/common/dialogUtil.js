import DIStockDetail from "@/view/DI/DIStockDetail.jsx"; 
import { createRoot } from 'react-dom/client';

class dialogUtil {
  showDialog() {
    const dialog = document.getElementById('dialog')
    const rootDialog = createRoot(dialog);
    rootDialog.render(DIStockDetail);
  }
}

export default new dialogUtil();