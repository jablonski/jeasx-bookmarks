import { FastifyReply } from "fastify/types/reply";
import { FastifyRequest } from "fastify/types/request";

type RouteProps = {
  request: FastifyRequest;
  reply: FastifyReply;
};
