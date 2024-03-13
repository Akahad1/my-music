
import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId:'3a097685ac068e011762',
      clientSecret: '10475e108e24b3250f939700420451b06f125c1c',
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)


// clientId:'3a097685ac068e011762',
// clientSecret:'10475e108e24b3250f939700420451b06f125c1c'