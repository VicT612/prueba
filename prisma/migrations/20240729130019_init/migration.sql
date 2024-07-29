-- CreateTable
CREATE TABLE "Paciente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "segundoNombre" TEXT,
    "apellidos" TEXT NOT NULL,
    "nombreRepresentante" TEXT NOT NULL,
    "apellidoRepresentante" TEXT NOT NULL,
    "parentesco" TEXT NOT NULL,
    "telefono" TEXT NOT NULL,
    "direccion" TEXT NOT NULL,
    "direcciondos" TEXT,
    "ciudad" TEXT NOT NULL,
    "estado" TEXT NOT NULL,
    "pais" TEXT NOT NULL,

    CONSTRAINT "Paciente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Historial" (
    "id" SERIAL NOT NULL,
    "alergias" TEXT NOT NULL,
    "inmunizacion" TEXT[],
    "horaRegistro" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "turno" TEXT NOT NULL,
    "pacienteId" INTEGER NOT NULL,

    CONSTRAINT "Historial_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Historial" ADD CONSTRAINT "Historial_pacienteId_fkey" FOREIGN KEY ("pacienteId") REFERENCES "Paciente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
