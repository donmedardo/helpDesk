import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';
import { Translate, ICrudGetAction, ICrudDeleteAction } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRequest } from 'app/shared/model/request.model';
import { IRootState } from 'app/shared/reducers';
import { getEntity, deleteEntity,updateEntity } from './request.reducer';
import { convertDateTimeFromServer, convertDateTimeToServer } from 'app/shared/util/date-utils';
import { object } from 'prop-types';

export interface IRequestDeleteDialogProps extends StateProps, DispatchProps, RouteComponentProps<{ id: string }> {}

export class RequestDeleteDialog extends React.Component<IRequestDeleteDialogProps> {
  componentDidMount() {
    this.props.getEntity(this.props.match.params.id);
  }

  confirmDelete = event => {
    let date =convertDateTimeToServer(new Date())
    let values={
    approved : date,
    status : "Approved"}

    const { requestEntity } = this.props;
    const entity = {
      ...requestEntity,
      ...values
    };
    this.props.updateEntity(entity);
    this.handleClose(event);
  };

  handleClose = event => {
    event.stopPropagation();
    this.props.history.goBack();
  };

  render() {
    const { requestEntity } = this.props;
    return (
      <Modal isOpen toggle={this.handleClose}>
        <ModalHeader toggle={this.handleClose}>
          <Translate contentKey="entity.delete.title">Confirm delete operation</Translate>
        </ModalHeader>
        <ModalBody id="edimcaApp.request.delete.question">
          <Translate contentKey="edimcaApp.request.delete.question" interpolate={{ id: requestEntity.id }}>
            Are you sure you want to delete this Request?
          </Translate>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={this.handleClose}>
            <FontAwesomeIcon icon="ban" />&nbsp;
            <Translate contentKey="entity.action.cancel">Cancel</Translate>
          </Button>
          <Button id="jhi-confirm-delete-request" color="danger" onClick={this.confirmDelete}>
            {/* <FontAwesomeIcon icon="trash" /> */}
            &nbsp;
            <Translate contentKey="entity.action.approv">Delete</Translate>
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

const mapStateToProps = ({ request }: IRootState) => ({
  requestEntity: request.entity
});

const mapDispatchToProps = { getEntity, deleteEntity ,updateEntity};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RequestDeleteDialog);
