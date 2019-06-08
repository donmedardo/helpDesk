package ec.com.edimca.domain;


import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;

import java.io.Serializable;
import java.time.ZonedDateTime;
import java.util.Objects;

import ec.com.edimca.domain.enumeration.Priority;

import ec.com.edimca.domain.enumeration.RequestStatus;

/**
 * A Request.
 */
@Entity
@Table(name = "request")
@Cache(usage = CacheConcurrencyStrategy.NONSTRICT_READ_WRITE)
public class Request implements Serializable {

    private static final long serialVersionUID = 1L;
    
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "sequenceGenerator")
    @SequenceGenerator(name = "sequenceGenerator")
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "descripcion")
    private String descripcion;

    @Column(name = "created")
    private ZonedDateTime created;

    @Column(name = "approved")
    private ZonedDateTime approved;

    @Column(name = "assigned")
    private ZonedDateTime assigned;

    @Enumerated(EnumType.STRING)
    @Column(name = "priority")
    private Priority priority;

    @Enumerated(EnumType.STRING)
    @Column(name = "status")
    private RequestStatus status;

    @ManyToOne
    @JsonIgnoreProperties("requests")
    private User user;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public Request name(String name) {
        this.name = name;
        return this;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Request descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public ZonedDateTime getCreated() {
        return created;
    }

    public Request created(ZonedDateTime created) {
        this.created = created;
        return this;
    }

    public void setCreated(ZonedDateTime created) {
        this.created = created;
    }

    public ZonedDateTime getApproved() {
        return approved;
    }

    public Request approved(ZonedDateTime approved) {
        this.approved = approved;
        return this;
    }

    public void setApproved(ZonedDateTime approved) {
        this.approved = approved;
    }

    public ZonedDateTime getAssigned() {
        return assigned;
    }

    public Request assigned(ZonedDateTime assigned) {
        this.assigned = assigned;
        return this;
    }

    public void setAssigned(ZonedDateTime assigned) {
        this.assigned = assigned;
    }

    public Priority getPriority() {
        return priority;
    }

    public Request priority(Priority priority) {
        this.priority = priority;
        return this;
    }

    public void setPriority(Priority priority) {
        this.priority = priority;
    }

    public RequestStatus getStatus() {
        return status;
    }

    public Request status(RequestStatus status) {
        this.status = status;
        return this;
    }

    public void setStatus(RequestStatus status) {
        this.status = status;
    }

    public User getUser() {
        return user;
    }

    public Request user(User user) {
        this.user = user;
        return this;
    }

    public void setUser(User user) {
        this.user = user;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Request request = (Request) o;
        if (request.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), request.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Request{" +
            "id=" + getId() +
            ", name='" + getName() + "'" +
            ", descripcion='" + getDescripcion() + "'" +
            ", created='" + getCreated() + "'" +
            ", approved='" + getApproved() + "'" +
            ", assigned='" + getAssigned() + "'" +
            ", priority='" + getPriority() + "'" +
            ", status='" + getStatus() + "'" +
            "}";
    }
}
