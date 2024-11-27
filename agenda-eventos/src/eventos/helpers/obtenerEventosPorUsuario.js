
import api from '../../shared/api/api';

export const obtenerEventosPorUsuario = async (usuarioId) => {
    const eventoResponse = await api.get(`/eventos/usuario/${usuarioId}`);
    return eventoResponse;
}

export const obtenerEventoPorId = async (id) => {
    const evento = await api.get(`/eventos/${id}`);
    return evento;
}

export const obtenerEliminarEventoInfoPorId = async (id) => {
    const evento = await api.get(`/eventos/evento-resumen/${id}`);
    return evento;
}

