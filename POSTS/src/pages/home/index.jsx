import { useEffect, useState } from 'react'
import * as Styled from './styles'
import Card from '../../components/card'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Home = () => {
    const [pageAtual, setPageAtual] = useState(1)
    const [dados, setDados] = useState([])
    const [loading, setLoading] = useState(false)

    const key = 'fuPzDi-JgPOBfL7QMmHQYKcgmMGfQ6-VmZEUXOhhbKw'
    const url = `https://api.unsplash.com/photos/?per_page=20&client_id=${key}&page=${pageAtual}`

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true)
                const res = await fetch(url)
                const data = await res.json()
                setDados(data)
            } catch (error) {
                console.log(error.message)
            } finally {
                setLoading(false)
            }
        }
        fetchData()
    }, [pageAtual])
    console.log(dados)

    const handleMorePage = () => {
        if (loading) return;

        setPageAtual((prevPage) => {
            const nextPage = prevPage + 1;
            return nextPage;
        });
    };

    const handleLessPage = () => {
        if (loading) return;

        setPageAtual((prevPage) => {
            const nextPage = prevPage - 1;
            return nextPage < 1 ? 1 : nextPage;
        });
    };


    return (
        <Styled.Div>
            {loading && <p>Carregando...</p>}
            <Styled.CardContainer>
                {dados && dados.map((dado) =>
                    <Card dado={dado} key={dado.id} />)}
            </Styled.CardContainer>
            <Styled.ButtonArrows onClick={handleLessPage} > <FaArrowLeft /> </Styled.ButtonArrows>
            <Styled.ButtonArrows onClick={handleMorePage} > <FaArrowRight /> </Styled.ButtonArrows>
        </Styled.Div>
    )
}

export default Home