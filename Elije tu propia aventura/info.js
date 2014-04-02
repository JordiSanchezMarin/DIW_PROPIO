var escenaActual = 1;
var escenaNow = null;
var info = {
    "tiempo": 30,
    "escenas": [
        {
            "id": 1,
            "imagen": null,
            "inicio": 0,
            "fin": 49.5,
            "pregunta": {
                "pregunta": "¿Que dia es hoy?",
                "respuestas": [
                    {
                        "enunciado": "Dia de trabajo",
                        "id_escena": 2
                    },
                    {
                        "enunciado": "Dia festivo",
                        "id_escena": 18
                    }
                ]
            }
        },
        {
            "id": 2,
            "imagen": "Imagenes/dia_trabajo.png",
            "inicio": 50.20,
            "fin": 53.00,
            "pregunta": {
                "pregunta": "¿Quieres ir a trabajar, o tomar un café antes?",
                "respuestas": [
                    {
                        "enunciado": "Ir a trabajar",
                        "id_escena": 3
                    },
                    {
                        "enunciado": "tomar café",
                        "id_escena": 12
                    }
                ]
            }
        },
        {
            "id": 3,
            "imagen": "Imagenes/ir_oficina.png",
            "inicio": 53.22,
            "fin": 59.8,
            "pregunta": {
                "pregunta": "¿Quieres dimitir, o trabajar seriamente?",
                "respuestas": [
                    {
                        "enunciado": "Trabajar seriamente",
                        "id_escena": 4
                    },
                    {
                        "enunciado": "Dimitir",
                        "id_escena": 9
                    }
                ]
            }
        },
        {
            "id": 4,
            "imagen": "Imagenes/trabajar_seriamente.png",
            "inicio": 60.19,
            "fin": 71.6,
            "pregunta": {
                "pregunta": "¿Como quieres volver a casa?",
                "respuestas": [
                    {
                        "enunciado": "Ir a casa en coche",
                        "id_escena": 5
                    },
                    {
                        "enunciado": "Ir a casa andando",
                        "id_escena": 6
                    }
                ]
            }
        },
        {
            "id": 5,
            "imagen": "Imagenes/ir_coche.png",
            "inicio": 72.31,
            "fin": 84.22,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 6,
            "imagen": "Imagenes/ir_andando.png",
            "inicio": 85.29,
            "fin": 92.0,
            "pregunta": {
                "pregunta": "¿Quieres enfrentarte al NiGgAh ReSHuLon?",
                "respuestas": [
                    {
                        "enunciado": "Si",
                        "id_escena": 7
                    },
                    {
                        "enunciado": "No",
                        "id_escena": 8
                    }
                ]
            }
        },
        {
            "id": 7,
            "imagen": "Imagenes/duelo_jedi.png",
            "inicio": 92.8,
            "fin": 99.3,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 8,
            "imagen": "Imagenes/enamorar_nigga.png",
            "inicio": 100.9,
            "fin": 116.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": null
                    }
                ]
            }
        },
        {
            "id": 9,
            "imagen": "Imagenes/dimitir.png",
            "inicio": 117.5,
            "fin": 134.6,
            "pregunta": {
                "pregunta": "¿Quieres ir a ahogar las penas, o enfrentarte al jefe?",
                "respuestas": [
                    {
                        "enunciado": "Ahogar las penas",
                        "id_escena": 10
                    },
                    {
                        "enunciado": "Enfrentarse al jefe",
                        "id_escena": 11
                    }
                ]
            }
        },
        {
            "id": 10,
            "imagen": "Imagenes/ahogar_penas.png",
            "inicio": 137.0,
            "fin": 156.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 11,
            "imagen": "Imagenes/encarar_jefe.png",
            "inicio": 157.7,
            "fin": 165.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 12,
            "imagen": "Imagenes/ir_bar.png",
            "inicio": 166.3,
            "fin": 176.5,
            "pregunta": {
                "pregunta": "¿Quieres ir al trabajo a atender al cliente, o quedarte con la novia?",
                "respuestas": [
                    {
                        "enunciado": "Ir al trabajo",
                        "id_escena": 13
                    },
                    {
                        "enunciado": "Quedarse con la novia",
                        "id_escena": 14
                    }
                ]
            }
        },
        {
            "id": 13,
            "imagen": "Imagenes/volver_curro.png",
            "inicio": 178.0,
            "fin": 211.9,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 14,
            "imagen": "Imagenes/quedarse_novia.png",
            "inicio": 212.8,
            "fin": 221.5,
            "pregunta": {
                "pregunta": "¿Quieres un pinchito en casa o cena romántica con la novia?",
                "respuestas": [
                    {
                        "enunciado": "Pinchito en casa",
                        "id_escena": 15
                    },
                    {
                        "enunciado": "Cena romántica",
                        "id_escena": 16
                    }
                ]
            }
        },
        {
            "id": 15,
            "imagen": "Imagenes/pinchito_casa.png",
            "inicio": 222.0,
            "fin": 238.2,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 18,
            "imagen": "Imagenes/dia_festivo.png",
            "inicio": 239.0,
            "fin": 247.5,
            "pregunta": {
                "pregunta": "¿Quieres quedar con ÉL o con ELLA?",
                "respuestas": [
                    {
                        "enunciado": "Quedar con ÉL",
                        "id_escena": 17
                    },
                    {
                        "enunciado": "Quedar con ELLA",
                        "id_escena": 19
                    }
                ]
            }
        },
        {
            "id": 17,
            "imagen": "Imagenes/quedar_amigo.png",
            "inicio": 273.0,
            "fin": 284.8,
            "pregunta": {
                "pregunta": "¿Quieres ir a la playa, o a jugar a basket?",
                "respuestas": [
                    {
                        "enunciado": "Ir a la playa",
                        "id_escena": 20
                    },
                    {
                        "enunciado": "Ir a jugar basket",
                        "id_escena": 21
                    }
                ]
            }
        },
        {
            "id": 16,
            "imagen": "Imagenes/cena_romantica.png",
            "inicio": 258.5,
            "fin": 270.6,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 19,
            "imagen": "Imagenes/quedar_novia.png",
            "inicio":248.9,
            "fin": 256.3,
            "pregunta": {
                "pregunta": "¿Quieres un pinchito en casa o cena romántica con la novia?",
                "respuestas": [
                    {
                        "enunciado": "Pinchito en casa",
                        "id_escena": 15
                    },
                    {
                        "enunciado": "Cena romántica",
                        "id_escena": 16
                    }
                ]
            }
        },
        {
            "id": 20,
            "imagen": "Imagenes/ir_playa.png",
            "inicio": 288.1,
            "fin": 308.8,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 21,
            "imagen": "Imagenes/ir_basket.png",
            "inicio": 309.2,
            "fin": 325.3,
            "pregunta": {
                "pregunta": null,
                "respuestas": [
                    {
                        "enunciado": null,
                        "id_escena": 22
                    }
                ]
            }
        },
        {
            "id": 22,
            "imagen": "Imagenes/23.png",
            "inicio": 327.0,
            "fin": 348,
           "pregunta": {
                "pregunta": null,
                "respuestas": null
            }
        }
    ]
}