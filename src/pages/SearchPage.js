import styled from 'styled-components';
import { Button, Card, Input, Spin, Toast, Typography } from '@douyinfe/semi-ui';
import { useState, useEffect, useRef } from 'react';
import { getPersonById } from '../services';
import PersonDetail from '../PersonDetail';
import gsap from 'gsap';
import validateDominicanId from 'validacion-cedula-dominicana';

const Center = styled.div`
    padding-top: 30vh;
    max-width: 40rem;
    margin: 0 auto;
`;

const SearchContainer = styled.div`
    display: flex;
    gap: 1rem;
    margin-bottom: 1rem;
`;

const Title = styled.h3`
    margin-bottom: 1rem;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

function SearchPage() {
    const [search, setSearch] = useState("");
    const [person, setPerson] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const centerRef = useRef();
    const profileRef = useRef();
    const slideUpAnimation = useRef();
    const revealAnimation = useRef();

    useEffect(() => {
        slideUpAnimation.current = gsap.to(centerRef.current, {
            paddingTop: "5vh",
            duration: 1,
            paused: true,
            ease: "power2.inOut"
        });

        revealAnimation.current = gsap.to(profileRef.current, {
            opacity: 1,
            duration: 0.5,
            paused: true,
            ease: "power2",
            onReverseComplete: () => setPerson()
        });
    }, []);


    async function handleFormSubmit(e) {
        e.preventDefault();
        setError(false);

        const cedula = search.trim().replace(/-/g, "");

        // validar cédula 
        if (!validateDominicanId(cedula)) {
            setError(true);
            Toast.error({ content: 'La cédula no tiene un formato válido', duration: 4 });
            return;
        }

        try {
            setLoading(true);
            setPerson(await getPersonById(cedula));
            if (!person) {
                slideUpAnimation.current.play();
                revealAnimation.current.play();
            }
        } catch (err) {
            setError(true);
            Toast.error({ content: 'Ciudadano no existente', duration: 4 });
        } finally {
            setLoading(false);
        }
    }

    function handleClear() {
        setError(false);
        if (person) {
            slideUpAnimation.current.reverse();
            revealAnimation.current.reverse();
        }
    }


    return (
        <div>
            <Center ref={centerRef}>
                <Card>
                    <TitleContainer>
                        <Title>Digita tu cédula para buscar tu información</Title>
                        {loading && <Spin />}
                    </TitleContainer>
                    <form>
                        <SearchContainer>
                            <Input name="search" showClear onClear={handleClear} validateStatus={error ? 'error' : 'default'} width="100%" placeholder="Cédula" value={search} onChange={setSearch} />
                            <Button type="secondary" htmlType="submit" onClick={handleFormSubmit}>Buscar</Button>
                        </SearchContainer>
                        <Typography.Text type="quaternary">Pista: <Typography.Text copyable>00116454281</Typography.Text></Typography.Text>
                    </form>
                </Card>
                <div style={{ opacity: 0 }} ref={profileRef}>
                    <PersonDetail person={person} />
                </div>
            </Center>

        </div>
    )
}

export default SearchPage;
