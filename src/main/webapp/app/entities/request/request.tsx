import React from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Button, Col, Row, Table } from 'reactstrap';
// tslint:disable-next-line:no-unused-variable
import { Translate, ICrudGetAllAction, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { IRootState } from 'app/shared/reducers';
import { getEntities } from './request.reducer';
import { IRequest } from 'app/shared/model/request.model';
// tslint:disable-next-line:no-unused-variable
import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';

export interface IRequestProps extends StateProps, DispatchProps, RouteComponentProps<{ url: string }> {}

export class Request extends React.Component<IRequestProps> {
  componentDidMount() {
    this.props.getEntities();
  }

  render() {
    const { requestList, match } = this.props;
    return (
      <div>
        <h2 id="request-heading">
          <Translate contentKey="edimcaApp.request.home.title">Requests</Translate>
          <Link to={`${match.url}/new`} className="btn btn-primary float-right jh-create-entity" id="jh-create-entity">
            <FontAwesomeIcon icon="plus" />&nbsp;
            <Translate contentKey="edimcaApp.request.home.createLabel">Create new Request</Translate>
          </Link>
        </h2>
        <div className="table-responsive">
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="global.field.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.name">Name</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.descripcion">Descripcion</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.created">Created</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.approved">Approved</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.assigned">Assigned</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.priority">Priority</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.status">Status</Translate>
                </th>
                <th>
                  <Translate contentKey="edimcaApp.request.user">User</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {requestList.map((request, i) => (
                <tr key={`entity-${i}`}>
                  <td>
                    <Button tag={Link} to={`${match.url}/${request.id}`} color="link" size="sm">
                      {request.id}
                    </Button>
                  </td>
                  <td>{request.name}</td>
                  <td>{request.descripcion}</td>
                  <td>
                    <TextFormat type="date" value={request.created} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={request.approved} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <TextFormat type="date" value={request.assigned} format={APP_DATE_FORMAT} />
                  </td>
                  <td>
                    <Translate contentKey={`edimcaApp.Priority.${request.priority}`} />
                  </td>
                  <td>
                    <Translate contentKey={`edimcaApp.RequestStatus.${request.status}`} />
                  </td>
                  <td>{request.user ? request.user.firstName : ''}</td>
                  <td className="text-right">
                    <div className="btn-group flex-btn-group-container">
                      {/* <Button tag={Link} to={`${match.url}/${request.id}`} color="info" size="sm">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button> */}
                      {request.status==='Approved' ?<Button tag={Link} to={`${match.url}/${request.id}/edit`} color="primary" size="sm">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>:null}
                      {request.status==='Pending' ? <Button tag={Link} to={`${match.url}/${request.id}/delete`} color="primary" size="sm">
                        {/* <FontAwesomeIcon icon="accessible" />{' '} */}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.approv">Delete</Translate>
                        </span>
                      </Button>:null}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ request }: IRootState) => ({
  requestList: request.entities
});

const mapDispatchToProps = {
  getEntities
};

type StateProps = ReturnType<typeof mapStateToProps>;
type DispatchProps = typeof mapDispatchToProps;

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Request);
