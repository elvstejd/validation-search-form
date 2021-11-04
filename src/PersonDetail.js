import { Card, Descriptions, Avatar } from '@douyinfe/semi-ui';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    margin-top: 1rem;
`;

const DescriptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;

const StyledAvatar = styled(Avatar)`
    margin-right: 2rem;
`;

function PersonDetail({ person }) {
    if (person) {
        return (
            <StyledCard>
                <DescriptionsContainer>
                    <Descriptions row size="medium">
                        <tr>
                            <td>
                                <StyledAvatar src="https://thispersondoesnotexist.com/image" size="extra-large" />
                            </td>
                        </tr>
                        <Descriptions.Item itemKey="Nombre">{person.nombre || 'null'}</Descriptions.Item>
                        <Descriptions.Item itemKey="Fecha de Nacimiento">{person.fechaNacimiento || 'null'}</Descriptions.Item>
                    </Descriptions>
                    <Descriptions row size="small">
                        <Descriptions.Item itemKey="Pais">{person.pais || 'null'}</Descriptions.Item>
                        <Descriptions.Item itemKey="Provincia">{person.provincia || 'null'}</Descriptions.Item>
                        <Descriptions.Item itemKey="Ocupación">{person.ocupacion || 'null'}</Descriptions.Item>
                    </Descriptions>
                    <Descriptions row size="medium">
                        <Descriptions.Item itemKey="Edad">{person.edad || 'null'}</Descriptions.Item>
                        <Descriptions.Item itemKey="Cédula">{person.cedula || 'null'}</Descriptions.Item>
                        <Descriptions.Item itemKey="Estado civil">{person.estadoCivil || 'null'}</Descriptions.Item>
                    </Descriptions>
                </DescriptionsContainer>
            </StyledCard>
        )
    }

    return null;
}

export default PersonDetail;
