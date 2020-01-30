import React from 'react';
import { observer } from 'mobx-react-lite';
import Modal from '../../commons/components/Modal';
import { Choice } from '../../interfaces/Orders';
import { ModalStore } from '../../commons/stores/authModalStores';
import SelectFoodContent from './SelectFoodContent';

interface PropTypes {
  menuChoice?: Choice;
  modalStore: ModalStore;
}

const SelectFoodModal: React.FC<PropTypes> = observer(
  ({ menuChoice, modalStore }) => {
    return (
      <Modal modalStore={modalStore} className='bg-dim top-0 p-6 min-h-500px'>
        {!modalStore.isHidden && (
          <SelectFoodContent menuChoice={menuChoice} modalStore={modalStore} />
        )}
      </Modal>
    );
  }
);

export default SelectFoodModal;