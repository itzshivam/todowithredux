import React from 'react'
import { connect } from 'react-redux'
import { setFilter } from '../redux/actions'
import { Filters } from '../redux/actionTypes'

class VisibilityFilter extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {Filters.map((filter, i) => (
                    <button
                        className={filter === this.props.activeFilter ? 'active' : ''}
                        onClick={() => this.props.setFilter(filter)}
                        key={`filter-${i}`}>
                        {filter}
                    </button>
                ))}
            </div>
        )
    }
}

const mapState = (state) => ({ activeFilter: state.visibilityFilter.activeFilter })
export default connect(mapState, { setFilter })(VisibilityFilter);