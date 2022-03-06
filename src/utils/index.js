const mapDBToAlbum = ({
    id,
    name,
    year,
    created_at,
    updated_at
}) => ({
    id,
    name,
    year,
    cratedAt: created_at,
    updatedAt: updated_at,
});

const mapDBToSong = ({
    id,
    title,
    year,
    performance,
    duration,
    created_at,
    updated_at,
    albumd_id,
}) => ({
    id,
    title,
    year,
    performance,
    duration,
    createdAt: created_at,
    updatedAt: updated_at,
    albumId: albumd_id,
});

module.exports = {mapDBToAlbum, mapDBToSong};

