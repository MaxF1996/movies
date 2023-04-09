import { Oval } from 'react-loader-spinner';
import { LoaderComponent } from './Loader.styled';

const Loader = () => {
  return (
    <LoaderComponent>
      <Oval
        ariaLabel="loading-indicator"
        height={100}
        width={100}
        strokeWidth={5}
        strokeWidthSecondary={1}
        color="blue"
        secondaryColor="white"
      />
    </LoaderComponent>
  );
};

export default Loader;
