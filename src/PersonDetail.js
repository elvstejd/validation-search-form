import { Card } from '@douyinfe/semi-ui';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    margin-top: 1rem;
`;

function PersonDetail({ person = {} }) {
    return (
        <StyledCard>
            <p>{person.nombre || 'null'}</p>
            <p>{person.pais || 'null'}</p>
            <p>{person.ocupacion || 'null'}</p>
        </StyledCard>
    )
}

export default PersonDetail;
