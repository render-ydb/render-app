import { useEffect } from 'react';

type UsePageShow = (pageShow?: () => void, pageHidden?: () => void) => any;
const usePageShow: UsePageShow = (pageShow, pageHidden) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        pageShow && pageShow();
      } else {
        pageHidden && pageHidden();
      }
    };
    handleVisibilityChange();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      pageHidden && pageHidden();
    };
  }, [pageShow, pageHidden]);
};

export default usePageShow;
