export interface OfertasPorCiudades {
    id: number;
    titulo: string;
    descripcion_oferta: string;
    popularidad: number;
    anuncio: boolean;
    id_empresa: number;
    id_categoria: number;
    id_ciudad: number;
    fecha_publicacion: Date;
    created_at: Date;
    updated_at: Date;
    nombre: string;
}